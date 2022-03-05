import './landing-page.css';

function Nav() {
  return (
    <>
        <nav id="top">
    <ul class="nav-list">
        <li class="nav-item nav-brand"><a href="/index.html" class="nav-link link">KStyle</a></li>

    </ul>
    <ul class="nav-list">
        <li class="nav-item"><input type="text" class="icon color-primary" placeholder="search here" /></li>
    </ul>

    <ul class="nav-list">
        <li class="nav-item"><a href="/wishlist/wishlist.html" class="nav-link"><span class="badge badge-span">
                    <i class="fa fa-heart fa-x"></i>
                    <span class="badge-circle badge-right"> 0 </span>
                </span></a></li>
        <li class="nav-item"><a href="/cart-management/cart.html" class="nav-link link"><span class="badge badge-span">
                    <i class="fa fa-cart-plus fa-x"></i>
                    <span class="badge-circle badge-right"> 0 </span></span>
            </a></li>
        <li class="nav-item"><a href="/auth/login.html" class="nav-link btn btn-primary">Login</a></li>

    </ul>
</nav>
    </>

  );
}

export default Nav;
