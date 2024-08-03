<?php

function akh_post_types()
{
    // Event post types
    register_post_type('event', [
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
    ]);

    // Streaming Provider post types
    register_post_type('streaming_provider', [
        'map_meta_cap' => true,
        'supports' => array('title'),
        'rewrite' => array(
            'slug' => 'streaming-providers'
        ),
        'has_archive' => false,
        'public' => true,
        'publicly_queryable'  => false,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-format-audio',
        'labels' => array(
            'name' => 'Streaming szolgálgató',
            'add_new' => 'Új szolgáltató',
            'add_new_item' => 'Új szolgáltató',
            'edit_item' => 'Szolgáltató szerkesztése',
            'all_items' => 'Összes szolgáltató',
            'singular_name' => 'Szolgáltató'
        ),
    ]);

    // Social Media Platform post types
    register_post_type('social_media', [
        'map_meta_cap' => true,
        'supports' => array('title'),
        'rewrite' => array(
            'slug' => 'social-media'
        ),
        'has_archive' => false,
        'public' => true,
        'publicly_queryable'  => false,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-facebook',
        'labels' => array(
            'name' => '"Social media" platform',
            'add_new' => 'Új platform',
            'add_new_item' => 'Új platform',
            'edit_item' => 'Platform szerkesztése',
            'all_items' => 'Összes platform',
            'singular_name' => 'Platform'
        ),
    ]);
}

add_action('init', 'akh_post_types');
