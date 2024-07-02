<?php

class LatestVideoPlugin
{

    private const SETTINGS_PAGE_NAME = "latest-video-settings-page";
    private const URL_OPTION_NAME = 'latest_yt_vid_url';
    private const TOGGLE_OPTION_NAME = 'latest_yt_vid_toggle';

    function __construct()
    {
        add_action("admin_menu", [$this, "admin_page"]);
        add_action("admin_init", [$this, "settings"]);
    }

    function admin_page()
    {
        add_menu_page(
            "Legújabb YouTube Videó",
            "Legújabb YT Video",
            "manage_options",
            self::SETTINGS_PAGE_NAME,
            [$this, "render_form"],
            "dashicons-youtube"
        );
    }

    function render_form()
    { ?>
        <div class="wrap">
            <h1>Legújabb YouTube Videó</h1>
            <form action="options.php" method="post">
                <?php
                settings_errors();
                settings_fields(self::SETTINGS_PAGE_NAME);
                do_settings_sections(self::SETTINGS_PAGE_NAME);
                submit_button();
                ?>
            </form>
        </div>
    <?php }

    function settings()
    {
        $first_section_name = "latest_yt_vid";

        add_settings_section(
            $first_section_name,
            null,
            null,
            self::SETTINGS_PAGE_NAME
        );

        add_settings_field(
            self::URL_OPTION_NAME,
            "Video URL",
            [$this, "url_input_html"],
            self::SETTINGS_PAGE_NAME,
            $first_section_name
        );

        register_setting(
            self::SETTINGS_PAGE_NAME,
            self::URL_OPTION_NAME,
            [
                "sanitize_callback" => [$this, "sanitize_url"],
                "default" => null
            ]
        );

        add_settings_field(
            self::TOGGLE_OPTION_NAME,
            "Megjelenítés",
            [$this, "toggle_input_html"],
            self::SETTINGS_PAGE_NAME,
            $first_section_name
        );

        register_setting(
            self::SETTINGS_PAGE_NAME,
            self::TOGGLE_OPTION_NAME,
            [
                "sanitize_callback" => [$this, "sanitize_toggle"],
                "default" => null
            ]
        );
    }

    function sanitize_toggle($input)
    {

        if ($input !== '1' && $input !== null && $input !== '0') {
            add_settings_error(
                self::TOGGLE_OPTION_NAME,
                "latest_yt_vid_toggle_value_error",
                "Valami nem okés a checkbox-al..."
            );

            return get_option(self::TOGGLE_OPTION_NAME, '1');
        }

        return $input ?? '0';
    }

    function sanitize_url($url)
    {

        $sanizied_url = sanitize_url($url, ['https']);
        $is_youtube_url = $this->check_if_url_is_from_youtube($sanizied_url);

        if (!$is_youtube_url) {
            add_settings_error(
                self::URL_OPTION_NAME,
                "latest_yt_vid_url_value_error",
                "Valami nem okés az URL-el..."
            );

            return get_option(self::URL_OPTION_NAME, null);
        }

        return $url;
    }

    function url_input_html()
    {
    ?>
        <input type="text" name="<?php echo self::URL_OPTION_NAME ?>" value="<?php echo get_option(self::URL_OPTION_NAME) ?>" />
    <?php
    }

    function toggle_input_html()
    {
    ?>
        <input type="checkbox" name="<?php echo self::TOGGLE_OPTION_NAME ?>" value="1" <?php checked(get_option(self::TOGGLE_OPTION_NAME), '1') ?> />
<?php

    }

    private function check_if_url_is_from_youtube($url)
    {
        $pattern = '/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/|.+\?v=)?([a-zA-Z0-9_-]{11})(\S+)?$/';

        return preg_match($pattern, $url);
    }
}

new LatestVideoPlugin();
