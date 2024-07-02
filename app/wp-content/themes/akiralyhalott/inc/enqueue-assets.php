<?php

add_action('wp_enqueue_scripts', 'main_style');
function main_style()
{
    wp_enqueue_style('akh_styles', get_theme_file_uri('/build/main.css'));
}
