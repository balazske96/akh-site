<header class="flex justify-center z-50 w-full relative xl:block ">
    <div class="max-w-[1350px] xl:py-[50px] xl:flex xl:flex-row xl:px-[10px] xl:mx-auto">
        <div class="flex w-full justify-center mt-[14.72vw] xl:mt-0 z-50 xl:justify-start">
            <a href="<?php echo get_home_url(); ?>">
                <img class="w-[60.55vw] xl:w-[225px] opacity-80" src="<?php echo get_stylesheet_directory_uri() . '/images/navbar-logo.webp' ?>" alt="">
            </a>
        </div>
        <nav class="absolute right-[50%] bottom-0 translate-x-1/2 translate-y-[169.56vw] z-50 xl:relative xl:translate-x-0 xl:translate-y-0 xl:right-auto">
            <ul class="flex gap-[10vw] xl:gap-[20px]">
                <li class="text-[3.61vw] uppercase order-2 xl:order-1 xl:text-[15px]"><a href="<?php echo get_site_url() . '/#koncertek' ?>">Koncertek</a></li>
                <li class="text-[3.61vw] uppercase order-3 xl:order-2 xl:text-[15px]"><a href="<?php echo get_site_url() . '/#webshop' ?>">Merch</a></li>
                <li class="text-[3.61vw] uppercase order-1 xl:order-3 xl:text-[15px]"><a href="<?php echo get_site_url() . '/#zene' ?>">Zene</a></li>
            </ul>
        </nav>
    </div>
</header>