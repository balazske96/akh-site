<?php

$image_src_set = [
    get_stylesheet_directory_uri() . '/images/hero-image-mobile-2.webp',
    get_stylesheet_directory_uri() . '/images/hero-image.webp'
]

?>

<section class="w-screen relative">
    <picture>
        <source media="(max-width: 1279px)" srcset="<?php echo $image_src_set[0] ?>">
        <source media="(min-width: 1280px)" srcset="<?php echo $image_src_set[1] ?>">
        <img class="w-full mt-[-8vw]" src="<?php echo $image_src_set[0] ?>" alt="">
    </picture>
    <!-- <div class="absolute bottom-0 left-0 h-[5rem] w-full bg-gradient-to-t from-[#e1e1e1] to-transparent"></div> -->
    <div class="absolute top-0 xl:bottom-0 left-0 h-[12.5vw] w-full bg-gradient-to-b from-[#e1e1e1] to-transparent"></div>
</section>