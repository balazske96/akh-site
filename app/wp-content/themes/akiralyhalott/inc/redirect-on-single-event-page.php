<?php

add_action('template_redirect', 'redirect_to_archive_page');
function redirect_to_archive_page()
{
    if (is_singular('event')) {
        $slug = get_post_type_object('event')->rewrite['slug'] ?? 'event';

        wp_redirect(home_url() . "/{$slug}", 301);
        exit;
    }
}
