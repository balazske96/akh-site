<?php

require_once __DIR__ . '/inc/helpers.php';

$images = [
    get_stylesheet_directory_uri() . '/images/section-1-image-1.webp',
    get_stylesheet_directory_uri() . '/images/section-1-image-2.webp',
    get_stylesheet_directory_uri() . '/images/section-1-image-3.webp',
    get_stylesheet_directory_uri() . '/images/section-1-image-4.webp',
    get_stylesheet_directory_uri() . '/images/section-3-image-1.webp',
    get_stylesheet_directory_uri() . '/images/section-4-image-1.webp',
    get_stylesheet_directory_uri() . '/images/section-4-image-2.webp',
    get_stylesheet_directory_uri() . '/images/section-4-money-a.webp',
    get_stylesheet_directory_uri() . '/images/section-4-money-b.webp',
];



$are_there_any_concert = true;
$shop_is_open = true;
$shop_url = home_url('/shop');

$concerts = [
    [
        'date' => '2024.06.15',
        'city' => 'Jászfelsőszentgyörgy',
        'venue' => 'Nagyerdei Víztorony',
    ],
    [
        'date' => '2024.06.15',
        'city' => 'Hajdúszoboszló',
        'venue' => 'Rock Café',
    ],
    [
        'date' => '2024.06.15',
        'city' => 'Ózd',
        'venue' => 'Trafo Club',
    ],
    [
        'date' => '2024.06.15',
        'city' => 'Bugyi',
        'venue' => 'Trafo Club',
    ],
    [
        'date' => '2024.06.15',
        'city' => 'Hejőpapi',
        'venue' => 'Trafo Club',
    ],
];

$webshop_products = [
    [
        'id' => 1,
        'name' => 'Fekete póló',
        'image' => get_stylesheet_directory_uri() . '/images/temp/BLACK_FRONT.png',
        'price' => 1000,
        'link' => 'http://localhost/product'
    ],
    [
        'id' => 2,
        'name' => 'Kapucnis pulóver',
        'image' => get_stylesheet_directory_uri() . '/images/temp/FRONT_PREVIEW_SOS.webp',
        'price' => 2000,
        'link' => 'http://localhost/product'
    ],
    [
        'id' => 3,
        'name' => 'S.O.S póló',
        'image' => get_stylesheet_directory_uri() . '/images/temp/FRONT_PREVIEW.webp',
        'price' => 3000,
        'link' => 'http://localhost/product'
    ],
    [
        'id' => 4,
        'name' => 'Fekete póló 2',
        'image' => get_stylesheet_directory_uri() . '/images/temp/FRONT.webp',
        'price' => 4000,
        'link' => 'http://localhost/product'
    ],
    [
        'id' => 5,
        'name' => 'AKH póló 2024',
        'image' => get_stylesheet_directory_uri() . '/images/temp/PREVIEW_FRONT.webp',
        'price' => 5000,
        'link' => 'http://localhost/product'
    ],
    [
        'id' => 6,
        'name' => 'AKH póló 2024 piros',
        'image' => get_stylesheet_directory_uri() . '/images/temp/RED_FRONT_V1-scaled.webp',
        'price' => 6000,
        'link' => 'http://localhost/product'
    ],
    [
        'id' => 7,
        'name' => 'AKH póló 2024 fehér',
        'image' => get_stylesheet_directory_uri() . '/images/temp/WHITE_FRONT_V1-scaled.webp',
        'price' => 7000,
        'link' => 'http://localhost/product'
    ]
];

?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A Király Halott | Hivatalos weboldal</title>
    <link rel='stylesheet' href='<?php echo get_stylesheet_directory_uri() . '/build/main.css' ?>' />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quando&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Martian+Mono:wght@100..800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/wp-content/themes/akiralyhalott/node_modules/@glidejs/glide/dist/css/glide.core.min.css">
</head>

<body>
    <?php get_template_part('template-parts/navbar'); ?>
    <?php get_template_part('template-parts/hero'); ?>
    <section>
        <div class="relative">
            <div class="flex justify-center" aria-hidden>
                <svg class="h-[32.5vw]" viewBox="0 0 2 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0L1.00001 117" stroke="url(#paint0_linear_187_449)" />
                    <defs>
                        <linearGradient id="paint0_linear_187_449" x1="0.5" y1="2.18557e-08" x2="0.500005" y2="117" gradientUnits="userSpaceOnUse">
                            <stop offset="0.098317" stop-color="#666666" stop-opacity="0" />
                            <stop offset="0.51223" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <h1 class="font-extrabold text-center leading-[14.33vw] text-[11.94vw] uppercase">
                Hallgasd<br>ahogy<br>átcsempész
            </h1>
            <div class="flex justify-center mt-[15.27vw]">
                <svg class="h-[10vw]" viewBox="0 0 8 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.64645 36.3536C3.84171 36.5488 4.15829 36.5488 4.35355 36.3536L7.53554 33.1716C7.7308 32.9763 7.7308 32.6597 7.53554 32.4645C7.34027 32.2692 7.02369 32.2692 6.82843 32.4645L4 35.2929L1.17157 32.4645C0.976312 32.2692 0.65973 32.2692 0.464468 32.4645C0.269205 32.6597 0.269205 32.9763 0.464468 33.1716L3.64645 36.3536ZM3.5 2.18557e-08L3.5 36L4.5 36L4.5 -2.18557e-08L3.5 2.18557e-08Z" fill="black" />
                </svg>
            </div>
            <div class="hidden xl:relative">
                <svg width="18" height="156" viewBox="0 0 18 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_233_2)">
                        <path d="M8.23922 141.92H9.79922C13.1192 141.92 15.7992 139.2 15.7992 135.88V125.72C15.7992 122.4 13.0792 119.68 9.75922 119.68H8.19922C4.87922 119.68 2.19922 122.4 2.19922 125.72V135.88C2.19922 139.2 4.87922 141.92 8.23922 141.92ZM3.39922 125.72C3.39922 123.04 5.55922 120.88 8.23922 120.88H9.79922C12.4792 120.88 14.6392 123.04 14.6392 125.72V135.88C14.6392 138.56 12.4792 140.72 9.79922 140.72H8.23922C5.55922 140.72 3.39922 138.56 3.39922 135.88V125.72Z" fill="black" />
                        <path d="M9.00039 138.36C9.32039 138.36 9.60039 138.08 9.60039 137.76V135.48C9.60039 135.16 9.32039 134.88 9.00039 134.88C8.68039 134.88 8.40039 135.16 8.40039 135.48V137.76C8.40039 138.12 8.68039 138.36 9.00039 138.36Z" fill="black" />
                        <path d="M11.1156 151.605L9.52018 153.215V148.525C9.52018 148.245 9.27748 148 8.99998 148C8.72248 148 8.47977 148.245 8.47977 148.525V153.25L6.88438 151.605C6.67628 151.395 6.36418 151.395 6.15608 151.605C5.94797 151.815 5.94797 152.13 6.15608 152.34L8.65318 154.86C8.68788 154.895 8.75717 154.965 8.82657 154.965C8.89597 155 8.96528 155 8.99998 155C9.03468 155 9.13868 155 9.17338 154.965C9.24278 154.93 9.31208 154.895 9.34678 154.86L11.8439 152.34C12.052 152.13 12.052 151.815 11.8439 151.605C11.6358 151.395 11.3237 151.43 11.1156 151.605Z" fill="black" />
                        <path d="M3 132.5H15" stroke="black" />
                        <g clip-path="url(#clip1_233_2)">
                            <path d="M9 2V112" stroke="black" stroke-linecap="round" />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_233_2">
                            <rect width="18" height="156" fill="white" />
                        </clipPath>
                        <clipPath id="clip1_233_2">
                            <rect width="2" height="112" fill="white" transform="translate(8 1)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <!-- Relative images -->
            <img class="w-[77.22vw] h-auto absolute right-[50%] translate-x-1/2 top-[112.5vw]" src="<?php echo $images[1] ?>" alt="">
            <img class="absolute left-0 w-[61.66vw] h-auto top-[176.09vw]" src="<?php echo $images[0] ?>" alt="">
            <!-- Relative text -->
            <div class="absolute top-[246.38vw] right-[55%] translate-x-1/2 w-max">
                <p class="text-[7vw] leading-[6.82vw] font-handwritten">Épp, hogy megjöttél</p>
                <p class="text-[7vw] leading-[6.82vw] ml-[19vw] font-handwritten">szárnyat bontott </p>
                <p class="text-[7vw] leading-[6.82vw] ml-[53vw] font-handwritten">a tél...</p>
            </div>
            <!-- Relative images -->
            <img class="absolute w-[102.49vw] h-auto left-[-10.27vw] top-[271.11vw]" src="<?php echo $images[2] ?>" alt="">
            <img class="absolute w-[48.05vw] h-auto right-0 top-[316.38vw]" src="<?php echo $images[3] ?>" alt="">
            <!-- Relative text / Desktop only -->
            <div class="hidden xl:relative">
                <div class="text-[5vw]">
                    <span class="">Bárcsak itt lennél,<br>örökkön örökké...</span>
                </div>
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.72474 0.932387C0.285884 1.50796 0.105651 2.4205 0.184047 3.66999C0.270054 5.04078 0.567164 6.18521 1.07538 7.10326C1.58359 8.02132 2.22291 8.69975 2.99335 9.13856C3.76454 9.5895 4.57472 9.78833 5.42389 9.73505C6.34584 9.6772 7.08728 9.36275 7.64821 8.7917C8.2099 8.23277 8.64264 7.46272 8.94644 6.48154C9.06323 6.596 9.1804 6.71652 9.29795 6.84311C9.42764 6.96894 9.55087 7.08909 9.66766 7.20355C10.2903 7.80995 10.8867 8.38755 11.457 8.93635C12.0281 9.49728 12.5404 9.99491 12.9939 10.4292C13.4595 10.8628 13.8402 11.2043 14.136 11.4537C14.4439 11.7023 14.6403 11.8239 14.7252 11.8186C14.895 11.8079 15.008 11.7643 15.0641 11.6877C15.1323 11.6104 15.1637 11.5292 15.1584 11.4443C15.1516 11.3352 14.9441 11.0376 14.5361 10.5517C14.4123 10.4076 14.2764 10.252 14.1286 10.0846C14.2811 10.0325 14.4198 9.9586 14.5456 9.87359C15.4453 9.26546 15.5164 8.22211 15.4745 7.55501C15.468 7.4508 15.442 7.35242 15.4004 7.26319C15.3472 6.88396 15.2013 6.46105 14.9626 5.99446C14.685 5.45166 14.3338 4.9013 13.9091 4.34336C13.4851 3.79757 13.0335 3.29613 12.5542 2.83905C12.0749 2.38197 11.6135 2.01512 11.1698 1.73848C10.7262 1.46185 10.3528 1.33305 10.0495 1.35207C9.60067 1.38024 9.22238 1.56229 8.91463 1.89825C8.60688 2.2342 8.33103 2.78738 8.08708 3.55776C7.44852 2.89146 6.81338 2.27975 6.18167 1.72263C5.56285 1.17688 4.95126 0.746367 4.3469 0.431104C3.75467 0.115079 3.18561 -0.0258086 2.63972 0.00844189C1.81482 0.0601982 1.17649 0.36818 0.72474 0.932387ZM13.8616 7.92259C13.8143 7.77248 13.783 7.57493 13.7676 7.32993L13.7505 7.05699C13.7573 6.97131 13.7634 6.8735 13.7686 6.76356C13.3765 6.14269 12.9628 5.56581 12.5274 5.0329C12.0921 4.49999 11.65 4.05276 11.201 3.69121C10.7528 3.34179 10.3244 3.11292 9.91572 3.0046C9.82328 3.27833 9.72592 3.57063 9.62364 3.88152C9.53425 4.20378 9.43994 4.54461 9.3407 4.90402C9.57581 5.1572 9.80484 5.41076 10.0278 5.6647C10.2629 5.91788 10.4976 6.165 10.732 6.40605C11.3177 7.03218 11.8681 7.621 12.3833 8.1725C12.3957 8.16674 12.4083 8.16125 12.4212 8.15606C12.7759 8.01255 13.1727 8.13819 13.3852 8.43701C13.3986 8.44236 13.4146 8.44855 13.4339 8.45583L13.5185 8.48742C13.5493 8.49903 13.5871 8.5136 13.6263 8.53022L13.6342 8.53349L13.638 8.5309C13.7123 8.48073 13.7698 8.40738 13.811 8.27022C13.8395 8.17545 13.8567 8.05936 13.8616 7.92259ZM5.88867 3.45821C6.4582 3.99488 7.05504 4.57854 7.67919 5.20921C7.48985 6.0736 7.211 6.7731 6.84265 7.30772C6.48642 7.84158 6.02323 8.12639 5.45308 8.16216C5.00423 8.19033 4.55953 8.09035 4.11896 7.86224C3.69128 7.6455 3.29429 7.33549 2.92799 6.93222C2.57381 6.52819 2.28293 6.06538 2.05535 5.54379C1.84066 5.03358 1.7158 4.49946 1.68079 3.94144C1.63132 3.15293 1.73051 2.59866 1.97836 2.27864C2.23911 1.96999 2.59997 1.80121 3.06095 1.77228C3.42487 1.74945 3.84798 1.89341 4.33027 2.20415C4.81256 2.51489 5.33202 2.93291 5.88867 3.45821Z" fill="#2B2C2D" />
                </svg>
            </div>
        </div>
    </section>
    <!-- YouTube Video -->
    <?php if ($are_there_any_concert) { ?>
        <section class="mt-[299.52vw] w-full flex justify-center">
            <iframe width="334" height="187" src="https://www.youtube.com/embed/A99MKasrGzk?si=dFaVgWL6IxPRwYKH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
    <?php } ?>
    <section class="relative pt-[185.44vw]">
        <img class="absolute left-[-29.16vw] w-[115.83vw] h-auto top-[14.88vw]" src="<?php echo $images[4] ?>" alt="">
        <div class="absolute top-[20.27vw] right-[65%] translate-x-1/2 w-max text-white">
            <p class="text-[7vw] leading-[9vw] font-handwritten">Ezt az éjszakát is</p>
            <p class="text-[7vw] leading-[9vw] ml-[15vw] font-handwritten">követeli a hajnal...</p>
        </div>
        <div class="absolute mx-auto z-50 w-[80.55vw] h-[80.55vw] left-[50%] translate-x-[-50%] top-[123.88vw] overflow-hidden">
            <h2 class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-extrabold text-center leading-[14.33vw] text-[11.94vw] uppercase text-white z-20">
                Közelgő<br>koncert<br>dátumok
            </h2>
            <video class="absolute top-0 left-0 h-full w-auto object-cover z-10" autoplay muted loop>
                <source type="video/mp4" src="https://s3-figma-videos-production-sig.figma.com/video/1069926685023483013/TEAM/ae70/66ba/-bd83-4027-9ac0-281e494834ad?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qJkIIs~xWwhdjLgOQth~8ohWoDIcS~D1T5Bf0RHVzSgwYJs~bqBFVzzMTvGXjZjVHnZciUNJpekLIh0tBppU5nKd9ZnUePmvXTdHon381DOGePEPTQLCr5~UUhGqjuO5LclG7nzFUZOTCg0f-GtsbfuEm~jgiudgEmXUxZj5KiFCVUCdCRsRLcyDzXmNIhHg4s2LNoU8Z0127ZYfEEKd8jyeHF5PL6EJ8J9T0nNkKMQ8D5SVyK9XmaYHAiYsUVWe7FD~ay9lCfwKhuWGvAp9-NaonmKPHllIMx~wtN-0CcXSa5IHYZtw5mubGEnq8unE3q9k0rV8vHa6U3Z6l-UwDA__">
            </video>
        </div>
        <?php if ($are_there_any_concert) { ?>
            <div class="flex flex-col justify-between pt-[35vw] pb-[14.16vw] bg-white px-[5vw] gap-[8.33vw]">
                <?php foreach ($concerts as $concert) { ?>
                    <div class="flex justify-between">
                        <div class="flex flex-col items-start justify-between gap-[2vw]">
                            <div class="flex justify-between gap-[2.77vw]">
                                <date class="text-[2.77vw] font-light leading-[3.33vw]"><?php echo $concert['date'] ?></date>
                                <span class="text-[2.77vw] font-light leading-[3.33vw]"><?php echo $concert['venue'] ?></span>
                            </div>
                            <p class="text-[5.5vw] uppercase leading-[6.66vw] font-extrabold max-w-[65vw] overflow-x-hidden text-ellipsis whitespace-nowrap"><?php echo $concert['city'] ?></p>
                        </div>
                        <div class="flex justify-center items-end">
                            <a class="py-[2.77vw] px-[3.61vw] border-2 border-[#CDCDCD] rounded-[13.05vw]" href="#link">JEGYEK</a>
                        </div>
                    </div>
                <?php } ?>
                <a class="xl:order-first flex items-center gap-[2.77vw]" href="#"><span>Összes koncert dátum</span>
                    <svg width="35" height="9" viewBox="0 0 35 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4C0.723858 4 0.5 4.22386 0.5 4.5C0.5 4.77614 0.723858 5 1 5L1 4ZM34.3536 4.85356C34.5488 4.65829 34.5488 4.34171 34.3536 4.14645L31.1716 0.964469C30.9763 0.769207 30.6597 0.769206 30.4645 0.964469C30.2692 1.15973 30.2692 1.47631 30.4645 1.67158L33.2929 4.5L30.4645 7.32843C30.2692 7.52369 30.2692 7.84027 30.4645 8.03554C30.6597 8.2308 30.9763 8.2308 31.1716 8.03554L34.3536 4.85356ZM1 5L34 5L34 4L1 4L1 5Z" fill="black" />
                    </svg>
                </a>
            </div>
        <?php } ?>
    </section>
    <section class="pt-[150vw] relative">
        <img class="absolute w-[91.66vw] top-[18.33vw] right-0" src="<?php echo $images[5] ?>" alt="">
        <img class="absolute w-[47.77vw] top-[62.77vw] right-[3.33vw]" src="<?php echo $images[6] ?>" alt="">
        <!-- Money 1 -->
        <img class="absolute w-[21.38vw] top-[78.61vw] left-[20.83vw]" src="<?php echo $images[7] ?>" alt="">
        <!-- Money 2 -->
        <img class="absolute w-[30.55vw] rotate-[-21.65deg] left-[28.33vw] top-[111.11vw]" src="<?php echo $images[8] ?>" alt="">
        <!-- Quote -->
        <div class="absolute top-[102vw] left-[1vw]">
            <p class="text-[7vw] tracking-widest leading-[7vw] font-handwritten">Termék<br>vagyok,<br>leszek, voltam<br>Ha egy<br>valamit,ezt<br>megtanultam</p>
        </div>
        <?php if ($shop_is_open) { ?>
            <div id="webshop" class="pb-[8vw]">
                <a href="<?php echo $webshop_products[0]['link'] ?>" id="product-link">
                    <div>
                        <img id="preview-image" class="mx-auto w-[83.33vw]" src="<?php echo $webshop_products[0]['image']  ?>">
                    </div>
                    <div>
                        <p id="title-container" class="text-[6.94vw] text-center font-bold pt-[5vw]"><?php echo $webshop_products[0]['name']  ?></p>
                    </div>
                    <div>
                        <p id="price-container" class="text-center text-[3.33vw] pt-[1vw] pb-[3vw]"><?php echo $webshop_products[0]['price']  ?> Ft</p>
                    </div>
                </a>
                <div id="webshop-slider" class="mt-[2vw]">
                    <div class="glide__arrows flex flex-row px-[6.11vw] gap-[4.15vw]" data-glide-el="controls">
                        <button class="glide__arrow glide__arrow--left rotate-180" data-glide-dir="<">
                            <svg class="w-[7.22vw] h-[7.22vw]" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="13" cy="13" r="12.5" stroke="black" />
                                <path d="M7 12.5C6.72386 12.5 6.5 12.7239 6.5 13C6.5 13.2761 6.72386 13.5 7 13.5L7 12.5ZM19.3536 13.3536C19.5488 13.1583 19.5488 12.8417 19.3536 12.6464L16.1716 9.46447C15.9763 9.2692 15.6597 9.2692 15.4645 9.46447C15.2692 9.65973 15.2692 9.97631 15.4645 10.1716L18.2929 13L15.4645 15.8284C15.2692 16.0237 15.2692 16.3403 15.4645 16.5355C15.6597 16.7308 15.9763 16.7308 16.1716 16.5355L19.3536 13.3536ZM7 13.5L19 13.5L19 12.5L7 12.5L7 13.5Z" fill="black" />
                            </svg>
                        </button>
                        <div class="glide__track relative" data-glide-el="track">
                            <ul class="glide__slides">
                                <?php foreach ($webshop_products as $product) {
                                    render_product_carousel($product);
                                } ?>
                            </ul>
                            <div class="absolute top-0 right-0 mr-[-7px] w-[15vw] h-[100%] webshop-carousel-fade"></div>
                        </div>
                        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
                            <svg class="w-[7.22vw] h-[7.22vw]" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="13" cy="13" r="12.5" stroke="black" />
                                <path d="M7 12.5C6.72386 12.5 6.5 12.7239 6.5 13C6.5 13.2761 6.72386 13.5 7 13.5L7 12.5ZM19.3536 13.3536C19.5488 13.1583 19.5488 12.8417 19.3536 12.6464L16.1716 9.46447C15.9763 9.2692 15.6597 9.2692 15.4645 9.46447C15.2692 9.65973 15.2692 9.97631 15.4645 10.1716L18.2929 13L15.4645 15.8284C15.2692 16.0237 15.2692 16.3403 15.4645 16.5355C15.6597 16.7308 15.9763 16.7308 16.1716 16.5355L19.3536 13.3536ZM7 13.5L19 13.5L19 12.5L7 12.5L7 13.5Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                </div>
                <a href="<?php echo esc_url($shop_url) ?>" class="flex w-full flex-row justify-center items-center gap-[5.55vw] py-[6.94vw]">
                    <span class="text-[4.15vw] font-medium">
                        WEBSHOP
                    </span>
                    <svg fill="none" height="8" viewBox="0 0 34 8" width="34" xmlns="http://www.w3.org/2000/svg">
                        <path d="m33.3536 4.35356c.1952-.19527.1952-.51185 0-.70711l-3.182-3.181981c-.1953-.195262-.5119-.195263-.7071 0-.1953.195262-.1953.511844 0 .707111l2.8284 2.82842-2.8284 2.82843c-.1953.19526-.1953.51184 0 .70711.1952.19526.5118.19526.7071 0zm-33.35360004.14644h33.00000004v-1h-32.99999996z" fill="#000" />
                    </svg>
                </a>
            </div>
        <?php } ?>
    </section>
    <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri() . '/dist/main.js' ?>" defer="true"></script>
</body>

</html>