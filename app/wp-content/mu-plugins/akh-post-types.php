<?php

function akh_post_types()
{
    // Event post types
    register_post_type('event', array(
        'map_meta_cap' => true,
        'supports' => array('title'),
        'rewrite' => array(
            'slug' => 'koncertek'
        ),
        'has_archive' => true,
        'public' => true,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-calendar',
        'labels' => array(
            'name' => 'Események',
            'add_new' => 'Új esemény',
            'add_new_item' => 'Új esemény',
            'edit_item' => 'Esemény szerkesztése',
            'all_items' => 'Összes esemény',
            'singular_name' => 'Esemény'
        ),
    ));
}

add_action('init', 'akh_post_types');
