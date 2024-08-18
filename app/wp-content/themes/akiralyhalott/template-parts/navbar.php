<header class="absolute top-0 left-0 w-full z-10">
    <div class="w-full xl:max-w-[75%] xl:mx-auto h-[3.75rem] z-10 xl:flex xl:justify-between">
        <div class="flex items-center h-full justify-between px-2">
            <a href="<?php echo get_home_url() ?>" class="">
                <img class="w-56 " src="<?php echo get_stylesheet_directory_uri() . '/images/navbar-logo.webp' ?>" alt="">
            </a>
            <div class="xl:hidden">
                <input class="side-menu hidden " type="checkbox" id="side-menu" />
                <label class="hamb cursor-pointer py-[2.5rem] px-[1.25rem]" for="side-menu">
                    <span class="hamb-line  bg-black block h-[0.125rem] relative w-[1.5rem] before:bg-black after:bg-black 
                before:block after:block before:h-full after:h-full before:absolute after:absolute before:transition-all after:transition-all
                before:duration-200 after:duration-200 before:ease-out after:ease-out before:w-full after:w-full
                before:top-[0.3125rem] after:top-[-0.3125rem]
                "></span>
                </label>
            </div>
        </div>
        <nav class="w-full xl:w-auto xl:h-auto h-full fixed xl:relative overflow-hidden bg-[var(--smoke-white)] xl:bg-transparent max-h-0 xl:max-h-none xl:px-2">
            <ul class="xl:flex xl:justify-between xl:h-full xl:gap-6">
                <li class="xl:flex xl:items-center"><a class="block p-2 xl:p-0 hover:bg-slate-300 xl:hover:bg-transparent xl:hover:text-slate-600" href="<?php echo get_site_url() . '/#koncertek' ?>">Koncertek</a></li>
                <li class="xl:flex xl:items-center"><a class="block p-2 xl:p-0 hover:bg-slate-300 xl:hover:bg-transparent xl:hover:text-slate-600" href="<?php echo get_site_url() . '/#merch' ?>">Merch</a></li>
                <li class="xl:flex xl:items-center"><a class="block p-2 xl:p-0 hover:bg-slate-300 xl:hover:bg-transparent xl:hover:text-slate-600" href="<?php echo get_site_url() . '/#zene' ?>">Zene</a></li>
            </ul>
        </nav>
    </div>
</header>