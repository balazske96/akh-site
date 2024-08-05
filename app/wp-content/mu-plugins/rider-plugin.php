<?php

class RiderPlugin
{
    private const SETTINGS_PAGE_NAME = 'riders';
    private const PASSWORD_OPTION_NAME = 'riders_password';
    private const TECH = 'tech';
    private const CATERING = 'catering';
    private const TECH_RIDER_OPTION_NAME = 'riders_' . self::TECH . '_rider';
    private const CATERING_RIDER_OPTION_NAME = 'riders_' . self::CATERING . '_rider';

    function __construct()
    {
        add_action("admin_menu", [$this, "admin_page"]);
        add_action('admin_enqueue_scripts', [$this, "enqueue_media"]);
        add_action("admin_init", [$this, "settings"]);
        add_action("admin_print_footer_scripts", [$this, "enqueue_rider_scripts"]);
    }

    function enqueue_media()
    {
        wp_enqueue_media();
    }

    function enqueue_rider_scripts()
    {
        $current_page = $_GET["page"] ?? '';

        if ($current_page === self::SETTINGS_PAGE_NAME) {
            wp_enqueue_script('tech_rider_plugin_scripts', WPMU_PLUGIN_URL . '/js/rider-plugin.js');
        }
    }

    function admin_page()
    {
        add_menu_page(
            "Rider(ek)",
            "Rider(ek)",
            "manage_options",
            self::SETTINGS_PAGE_NAME,
            [$this, "render_form"],
            "dashicons-info-outline"
        );
    }

    function settings()
    {
        $section_name = 'riders';

        add_settings_section($section_name, null, null, self::SETTINGS_PAGE_NAME);

        add_settings_field(self::PASSWORD_OPTION_NAME, "Jelszó", [$this, 'render_password_field'], self::SETTINGS_PAGE_NAME, $section_name);
        register_setting(self::SETTINGS_PAGE_NAME, self::PASSWORD_OPTION_NAME, ['sanitize_callback' => [$this, "sanitize_password_field"], "default" => "null"]);

        add_settings_field(self::TECH_RIDER_OPTION_NAME, 'Tech rider', [$this, 'render_tech_rider_field'], self::SETTINGS_PAGE_NAME, $section_name);
        register_setting(self::SETTINGS_PAGE_NAME, self::TECH_RIDER_OPTION_NAME, ['sanitize_callback' => [$this, "sanitize_tech_rider_field"], "default" => "null"]);

        add_settings_field(self::CATERING_RIDER_OPTION_NAME, 'Catering rider', [$this, 'render_catering_rider_field'], self::SETTINGS_PAGE_NAME, $section_name);
        register_setting(self::SETTINGS_PAGE_NAME, self::CATERING_RIDER_OPTION_NAME, ['sanitize_callback' => [$this, "sanitize_catering_rider_field"], "default" => "null"]);
    }

    function render_form()
    { ?>
        <div class="wrap">
            <h1>Rider(ek)</h1>
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

    function render_password_field()
    { ?>
        <input type="password" name="<?php echo self::PASSWORD_OPTION_NAME ?>" placeholder="****" />
    <?php }

    function render_tech_rider_field()
    {
        $this->render_rider_field(self::TECH);
    }

    function render_catering_rider_field()
    {
        $this->render_rider_field(self::CATERING);
    }

    function render_rider_field($type)
    {
        $option_name = $type == self::TECH ? self::TECH_RIDER_OPTION_NAME : self::CATERING_RIDER_OPTION_NAME;
        $attachment_id = get_option($option_name);

        /** @var WP_Post */
        $attachment = get_post($attachment_id);
        $is_pdf = $attachment ? $attachment->post_mime_type === 'application/pdf' : false;
        $display_type = $attachment ? 'block' : 'none';
        $link = wp_get_attachment_url($attachment_id)

    ?>
        <a href="<?php echo $link ?>" target="_blank" id="<?php echo $type ?>_rider_filename" style="display:<?php echo $display_type ?>">
            <?php if ($attachment && $is_pdf) echo $attachment->post_title . '.pdf' ?>
        </a>
        <input id="<?php echo $type ?>_rider_input" type="text" hidden name="<?php echo $option_name ?>" />
        <button type="button" class="button-secondary" id="<?php echo $type ?>RiderButton">Fájl kiválasztása</button>
<?php
    }

    function sanitize_password_field($input)
    {
        $current_password = get_option(self::PASSWORD_OPTION_NAME) ?? null;

        if (is_null($input) || $input === '') {
            return $current_password;
        }

        /** Is password at least 8 character long and contains number */
        if (strlen($input) < 8 || !preg_match('/[0-9]/', $input)) {
            add_settings_error(
                self::PASSWORD_OPTION_NAME,
                "riders_password_error",
                "A jelszónak legalább 8 karakter hosszúnak kell lennie és tartalmaznia kell számot!"
            );

            return get_option(self::PASSWORD_OPTION_NAME) ?? null;
        }

        return md5($input);
    }

    function sanitize_tech_rider_field($field)
    {
        return $this->sanitize_rider_file_field(self::TECH_RIDER_OPTION_NAME, $field);
    }

    function sanitize_catering_rider_field($field)
    {
        return $this->sanitize_rider_file_field(self::CATERING_RIDER_OPTION_NAME, $field);
    }

    function sanitize_rider_file_field($rider_type, $field)
    {

        $current_attachment_id = get_option($rider_type) ?? null;

        if (is_null($field) || $field === '' || $current_attachment_id === $field) {
            return $current_attachment_id;
        }

        /** @var WP_Post */
        $attachment = get_post($field);

        if ($attachment) {
            $mime_type = $attachment->post_mime_type;

            if ($mime_type !== "application/pdf") {
                add_settings_error(
                    self::TECH_RIDER_OPTION_NAME,
                    "riders_tech_rider_error",
                    "Nem megfelelő fájltípus. Válassz egy PDF-et!"
                );

                return $current_attachment_id;
            };

            return $field;
        }

        add_settings_error(
            self::TECH_RIDER_OPTION_NAME,
            "riders_tech_rider_error",
            "Valami nem jó. Szólj Balázsnak!"
        );

        return $current_attachment_id;
    }
}

new RiderPlugin();
