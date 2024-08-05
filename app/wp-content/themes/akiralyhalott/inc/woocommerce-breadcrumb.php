<?php

// add_filter( 'woocommerce_breadcrumb_home_url', 'woo_custom_breadrumb_home_url' );
// function woo_custom_breadrumb_home_url() {
//     return get_site_url() . '/shop';
// }

// /**
//  * Change several of the breadcrumb defaults
//  */
// add_filter( 'woocommerce_breadcrumb_defaults', 'jk_woocommerce_breadcrumbs' );
// function jk_woocommerce_breadcrumbs() {
//     return array(
//             'delimiter'   => ' &#47; ',
//             'wrap_before' => '<nav class="woocommerce-breadcrumb" itemprop="breadcrumb">',
//             'wrap_after'  => '</nav>',
//             'before'      => '',
//             'after'       => '',
//             'home'        => _x( 'Home', 'breadcrumb', 'woocommerce' ),
//         );
// }

add_filter('woocommerce_get_breadcrumb', function ($crumbs, $Breadcrumb) {
    $page_slug = 'shop';

    $new_breadcrumb =  [
        _x('Vissza az összes termékre', 'breadcrumb', 'woocommerce'),
        get_permalink(wc_get_page_id($page_slug)) // URL
    ];

    array_splice($crumbs, 0, -1, [$new_breadcrumb]);

    return $crumbs;
}, 10, 2);
