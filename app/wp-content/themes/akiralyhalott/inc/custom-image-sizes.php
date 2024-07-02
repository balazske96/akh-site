<?php

add_action('after_setup_theme', 'university_features');

function university_features()
{
    add_image_size('banner_desktop', 1920, 1200, true);
    add_image_size('banner_mobile', 800, 1200, true);
}
