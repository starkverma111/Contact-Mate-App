<template>
<!-- Image Section -->
<div class="container my-4">
    <div class="text-center py-2">
        <img src="@/assets/contact.png" alt="contact" class="img-fluid mb-4" style="height:160px; width: 160px;" />
        <h1>Contact Mate App</h1>
        <p>Effortlessly Organize Your Contacts, Always Stay Connected.</p>
    </div>
</div>

<!-- Highlights Section -->
<div class="container">
    <div class="row gy-3 ">
        <div class="col-sm-12 col-md-6 col-lg-3 text-center">
            <router-link to="/" class="text-decoration-none text-dark">
                <div class="p-2 bg-white rounded border border-0 border-2  border-bottom border-end border-dark-subtle shadow-sm fw-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" me-2 bi bi-journal-bookmark-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z" />
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                    </svg>All Contacts</div>
            </router-link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3 text-center">
            <router-link to="/favorite" class="text-decoration-none text-dark">
                <div class="p-2 bg-white rounded border border-0 border-2  border-bottom border-end border-success-subtle shadow-sm fw-bold"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-pulse-fill me-2" viewBox="0 0 16 16">
                        <path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9z" />
                        <path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8z" />
                    </svg>Favorite</div>
            </router-link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3 text-center">
            <router-link to="/delete" class="text-decoration-none text-dark">
                <div class="p-2 bg-white rounded border border-0 border-2  border-bottom border-end border-danger-subtle shadow-sm fw-bold"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3 me-2" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>Trash</div>
            </router-link>
        </div>
        <div v-if="$route.path === '/'" class="col-sm-12 col-md-6 col-lg-3 text-center " data-bs-toggle="modal" data-bs-target="#exampleModal" style="cursor: pointer;">
            <div class="p-2 bg-white rounded border border-0 border-2  border-bottom border-end border-primary-subtle shadow-sm fw-bold ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square me-2" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>Create
            </div>
        </div>
    </div>
</div>

<!-- All Contacts Section -->
<div>
    <router-view></router-view>
</div>

<!-- Footer -->
<footer class="d-flex justify-content-center p-5">
    <span class="text-dark">Crafted with love by <a href="https://niyander.com/" class="text-decoration-none">Niyander</a> © 2024</span>
</footer>
</template>

<script>
</script>

<style>
body {
    font-family: "Roboto", sans-serif;
    background-color: whitesmoke;
}

.hh2 {
    font-family: "Send Flowers", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 3rem;
    letter-spacing: 0.03em;
}

.form-control:focus {
    border-color: #7e8287bf;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(132 134 137 / 48%);
}

.contact-img {
    width: 90px;
    height: 90px;
    object-fit: cover;
}

.border-success {
    border-color: rgb(42 237 147 / 93%) !important;
}

#btnn {
    background-color: black;
    text-color: #fff;
}

img {
    transition: 0.3s all ease-in;
}

img:hover {

    transform: scale(1.1);
    /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    transform: rotate(11deg);

}

.container {
    width: 50% !important;
}

@media only screen and (max-width: 960px) {
    .container {
        width: 95% !important;
    }
}
</style>
