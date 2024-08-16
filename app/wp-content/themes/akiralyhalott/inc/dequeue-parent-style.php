<?php

add_action('wp_print_styles', 'dequeue_parent_style', 9999);
function dequeue_parent_style()
{
    if (is_front_page()) {
        wp_dequeue_style('botiga-style-min');
        wp_dequeue_style('botiga-custom-styles');
        wp_dequeue_style('botiga-style');
    }
}
