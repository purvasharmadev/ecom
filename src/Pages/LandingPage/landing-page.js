import './landing-page.css';

function LandingPage() {
  return (
    <>
{/* Group Banners */}
<div class="banner-container">
    <div class="card card-overlay">
        <img class="img-responsive" src="https://variety.com/wp-content/uploads/2021/05/BTS_Butter-photo.jpg" alt="img-bts" />
        <div class="card-body">
            <h1 class="card-text">BTS</h1>
        </div>

    </div>
    <div class="card card-overlay">
        <img class="img-responsive" src="https://wallpaperaccess.com/full/1099609.jpg"  alt="img-bp" />
        <div class="card-body">
            <h1 class="card-text">BlankPink</h1>
        </div>

    </div>
    <div class="card card-overlay">
        <img class="img-responsive" src="https://img.wallpapersafari.com/desktop/1536/864/43/71/eqZVlb.jpg"  alt="img-exo" />
        <div class="card-body">
            <h1 class="card-text">EXO</h1>
        </div>

    </div>
    <div class="card card-overlay">
        <img class="img-responsive"
            src="https://pm1.narvii.com/7243/709ad04f96d04955409a35178eb0d045a6c5054cr1-1080-682v2_hq.jpg"  alt="img-twice" />
        <div class="card-body">
            <h1 class="card-text">TWICE</h1>
        </div>

    </div>
    <div class="card card-overlay">
        <img class="img-responsive" src="https://thehoneypop.com/wp-content/uploads/2020/04/txtfeature7.jpg"  alt="img-txt" />
        <div class="card-body">
            <h1 class="card-text">TXT</h1>
        </div>

    </div>
</div>


{/* Header */}
<header>
    <div>
        <h1 class="text-lg">KStyle</h1>
        <p>One stop for all your KPOP Cravings !!</p>
        <button class="btn btn-primary m-1"><a href="/auth/login.html" class="nav-link link"> Login</a></button>
        <button class="btn btn-secondary nav-link"><a href="/product/product.html" class="nav-link link"> Shop</a></button>
    </div>
</header>


{/* Featured Products Container */}
<div class="featured-product-container">
    <div class="card flex-card">

        <div class="column">
            <div class="card-header">
                <span class="ecom-badge">New Arrival</span>

                <img height="150px" width="100%" loading="lazy"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33FM3HNQdARhUhRtY6VbilKbxutND1ZEjFg&usqp=CAU"  alt="product-img" />

            </div>
        </div>
        <div class="column">
            <div class="card-body">
                <h3 class="card-heading">Artist Made Collection</h3>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, magnam.</p>
                <br/>
                <a href="/product/product.html" class="btn btn-primary-outline"> Go to Product </a>

            </div>
        </div>
    </div>

    <div class="card flex-card">

       <div class="column">
            <div class="card-header">
                <span class="ecom-badge">New Arrival</span>

                <img height="150px" width="100%" loading="lazy"
                    src="https://www.kpoppost.com/wp-content/uploads/2021/06/Peaches-and-cream.jpg"  alt="product-img" />

            </div>
        </div>
        <div class="column">
            <div class="card-body">
                <h3 class="card-heading">BTS Butter</h3>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, magnam.</p>
                <br/>
                <a href="/product/product.html" class="btn btn-primary-outline"> Go to Product </a>

            </div>
        </div>
    </div>
</div>

    <div class="featured-product-container">
        <div class="card flex-card">

            <div class="column">
                <div class="card-header">
                    <span class="ecom-badge">New Arrival</span>

                    <img height="150px" width="100%" loading="lazy"
                        src="https://assets.bandwagon.asia/system/tinymce/image/file/3508/content_mceu_33223121511629985758407.jpg"  alt="product-img"/>

                </div>
            </div>
            <div class="column">
                <div class="card-body">
                    <h3 class="card-heading">BlackPink LaLisa</h3>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, magnam.</p>
                    <br/>
                    <a href="/product/product.html" class="btn btn-primary-outline"> Go to Product </a>
                </div>
            </div>
        </div>

        <div class="card flex-card">

            <div class="column">
                <div class="card-header">
                    <span class="ecom-badge">New Arrival</span>

                    <img height="150px" width="100%"  loading="lazy"
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/3fea9a105704851.5f8fa5155d30e.jpg"  alt="product-img" />

                </div>
            </div>
            <div class="column">
                <div class="card-body">
                    <h3 class="card-heading">TXT The Dream Chapter</h3>
                    <p class="card-text">Lorem ipsum dolor sit amet Lorem, ipsum dolor.</p>
                    <br/>
                    <a href="/product/product.html" class="btn btn-primary-outline"> Go to Product </a>
                </div>
            </div>
        </div>


</div>

</>
  );
}

export default LandingPage;
