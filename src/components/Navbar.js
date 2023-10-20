import React from 'react'

export default function Navbar() {
  return (
    <div>
        <header>
        <input type="checkbox" name="" id="chk1"></input>
        <div class="logo">
            <h1> </h1>
        </div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>

        </ul>
        <div class="search-box button"id="sign-in">
            <button type="button" class="btn btn-primary">sign in</button>
        </div>

        <div class="menu">
            <label for="chk1">
                <i class="fa fa-bars"></i>
            </label>
        </div>
    </header>





    </div>
  )
}
