<?php

const SETTINGS_PAGE_NAME = 'banner-image-plugin';

const DESKTOP_IMAGE_OPTION_KEY = 'desktop_banner_image_id';
const DESKTOP_VIDEO_OPTION_KEY = 'desktop_banner_video_id';

const MOBILE_IMAGE_OPTION_KEY = 'mobile_banner_image_id';
const MOBILE_VIDEO_OPTION_KEY = 'mobile_banner_video_id';

const ALLOWED_VIDEO_MIME_TYPES = [
    'video/mp4',
    'video/webm'
];

const ALLOED_IMAGE_MIME_TYPES = [
    'image/jpg',
    'image/jpeg',
    'image/webp',
];

add_action('admin_menu', 'enqueue_plugin_style');

function enqueue_plugin_style()
{
    $current_page = $_GET["page"] ?? null;

    if ($current_page === SETTINGS_PAGE_NAME) {
        wp_enqueue_style('banner_plugin_style', WPMU_PLUGIN_URL . '/css/banner-plugin.css');
    }
}

add_action("admin_menu", "admin_page");
function admin_page()
{
    add_menu_page(
        "Banner",
        "Banner",
        "manage_options",
        SETTINGS_PAGE_NAME,
        "render_form",
        "dashicons-cover-image"
    );
}

function render_form()
{
?>
    <div class="wrap">
        <h1>Banner</h1>
        <form action="options.php" method="post">
            <?php
            settings_errors();
            settings_fields(SETTINGS_PAGE_NAME);
            do_settings_sections(SETTINGS_PAGE_NAME);
            submit_button();
            ?>
        </form>
    </div>
    <?php
}

add_action('admin_menu', function () {
    wp_enqueue_media();
});

add_action("admin_init", "settings");

function settings()
{
    $mobile_section = 'mobile_files';
    $desktop_section = 'desktop_files';

    add_settings_section($mobile_section, 'Mobil', null, SETTINGS_PAGE_NAME);
    add_settings_section($desktop_section, 'Desktop', null, SETTINGS_PAGE_NAME);

    /** Desktop image */
    add_settings_field(
        DESKTOP_IMAGE_OPTION_KEY,
        'Kép',
        'render_desktop_image_field',
        SETTINGS_PAGE_NAME,
        $desktop_section
    );

    register_setting(
        SETTINGS_PAGE_NAME,
        DESKTOP_IMAGE_OPTION_KEY,
        ['sanitize_callback' => 'sanitize_desktop_image_field']
    );

    /** Desktop video */
    add_settings_field(
        DESKTOP_VIDEO_OPTION_KEY,
        'Videó',
        'render_desktop_video_field',
        SETTINGS_PAGE_NAME,
        $desktop_section
    );

    register_setting(
        SETTINGS_PAGE_NAME,
        DESKTOP_VIDEO_OPTION_KEY,
        ['sanitize_callback' => 'sanitize_desktop_video_field']
    );

    /** Mobile image */
    add_settings_field(
        MOBILE_IMAGE_OPTION_KEY,
        'Kép',
        'render_mobile_image_field',
        SETTINGS_PAGE_NAME,
        $mobile_section
    );

    register_setting(
        SETTINGS_PAGE_NAME,
        MOBILE_IMAGE_OPTION_KEY,
        ['sanitize_callback' => 'sanitize_mobile_image_field']
    );

    /** Mobile video */
    add_settings_field(
        MOBILE_VIDEO_OPTION_KEY,
        'Videó',
        'render_mobile_video_field',
        SETTINGS_PAGE_NAME,
        $mobile_section
    );

    register_setting(
        SETTINGS_PAGE_NAME,
        MOBILE_VIDEO_OPTION_KEY,
        ['sanitize_callback' => 'sanitize_mobile_video_field']
    );
}

function render_desktop_image_field()
{
    render_file_field('desktop_image');
}

function render_desktop_video_field()
{
    render_file_field('desktop_video');
}

function render_mobile_image_field()
{
    render_file_field('mobile_image');
}

function render_mobile_video_field()
{
    render_file_field('mobile_video');
}

/**
 * @param string $type
 */
function render_file_field($type)
{

    $option_name = match ($type) {
        'mobile_image' => MOBILE_IMAGE_OPTION_KEY,
        'mobile_video' => MOBILE_VIDEO_OPTION_KEY,
        'desktop_image' => DESKTOP_IMAGE_OPTION_KEY,
        'desktop_video' => DESKTOP_VIDEO_OPTION_KEY,
        default => DESKTOP_IMAGE_OPTION_KEY
    };

    $attachment_id = get_option($option_name);

    /** @var WP_Post */
    $attachment = get_post($attachment_id);
    $is_video = $type === 'desktop_video' || $type === 'mobile_video';
    $is_image = $type === 'desktop_image' || $type === 'mobile_image';
    $file_url = null;

    if ($attachment) $file_url = wp_get_attachment_url($attachment_id);


    if ($is_video) { ?>
        <video autoplay class="banner-plugin-video-preview" id="<?php echo $type ?>_media_container" src="<?php echo $file_url ?? '' ?>" style="display:<?php echo $file_url ? 'block' : 'none' ?>"></video>
    <?php }

    if ($is_image) { ?>
        <img class="banner-plugin-image-preview" id="<?php echo $type ?>_media_container" src="<?php echo $file_url ?? '' ?>" style="display:<?php echo $file_url ? 'block' : 'none' ?>" />
    <?php } ?>

    <input id="<?php echo $type ?>_input" type="text" hidden name="<?php echo $option_name ?>" <?php echo $file_url ? 'value="' . $attachment_id . '"' : '' ?> />
    <button type="button" class="button-secondary" id="<?php echo $type ?>_banner_button">Fájl kiválasztása</button>
<?php
}

function sanitize_desktop_image_field($field)
{
    return sanitize_banner_file('desktop_image', $field);
}

function sanitize_desktop_video_field($field)
{
    return sanitize_banner_file('desktop_video', $field);
}

function sanitize_mobile_image_field($field)
{
    return sanitize_banner_file('mobile_image', $field);
}

function sanitize_mobile_video_field($field)
{
    return sanitize_banner_file('mobile_video', $field);
}

function sanitize_banner_file($type, $attachment_id)
{

    $option_name = match ($type) {
        'mobile_image' => MOBILE_IMAGE_OPTION_KEY,
        'mobile_video' => MOBILE_VIDEO_OPTION_KEY,
        'desktop_image' => DESKTOP_IMAGE_OPTION_KEY,
        'desktop_video' => DESKTOP_VIDEO_OPTION_KEY,
        default => DESKTOP_IMAGE_OPTION_KEY
    };

    $current_attachment_id = get_option($option_name) ?? null;

    if (is_null($attachment_id) || $attachment_id === '') {

        $field_name = match ($type) {
            'mobile_image' => 'mobil kép',
            'mobile_video' => 'mobil videó',
            'desktop_image' => 'desktop kép',
            'desktop_video' => 'desktop videó',
        };

        add_settings_error(
            $option_name,
            "banner_errors",
            'Pls válassz ' . $field_name . ' fájlt is'
        );

        return $current_attachment_id;
    }

    /** @var WP_Post */
    $attachment = get_post($attachment_id);

    if ($attachment) {
        $mime_type = $attachment->post_mime_type;

        if (
            ($type === 'mobile_video' || $type === 'desktop_video') &&
            !in_array($mime_type, ALLOWED_VIDEO_MIME_TYPES)
        ) {
            add_settings_error(
                $option_name,
                "banner_errors",
                'Nem megfelelő fájltípus. Válassz "mp4" vagy "webm" formátumú fájlt'
            );

            return $current_attachment_id;
        }

        if (
            ($type === 'mobile_image' || $type === 'desktop_image') &&
            !in_array($mime_type, ALLOED_IMAGE_MIME_TYPES)
        ) {
            add_settings_error(
                $option_name,
                "banner_errors",
                'Nem megfelelő fájltípus. Válassz "jpg" vagy "webp" formátumú fájlt'
            );

            return $current_attachment_id;
        };

        return $attachment_id;
    }

    add_settings_error(
        $option_name,
        "banner_errors",
        "Valami nem jó. Szólj Balázsnak!"
    );

    return $current_attachment_id;
}

add_action("admin_print_footer_scripts", "enqueue_banner_scripts");
function enqueue_banner_scripts()
{
    $current_page = $_GET["page"];

    if ($current_page === SETTINGS_PAGE_NAME) {
        wp_enqueue_script('banner_plugin_scripts', WPMU_PLUGIN_URL . '/js/banner-plugin.js');
    }
}
