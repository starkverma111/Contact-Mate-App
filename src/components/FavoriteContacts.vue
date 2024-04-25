<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-xs-12">
                <div class="text-start py-2">
                    <h3>Favorite Contacts</h3>
                    <p>Total favorite contacts: {{ totalfavorite }}</p>
                </div>
                <!-- Show All favorite Contacts here-->
                <div v-for="x in contacts" :key="x.id">
                    <div v-if="x.favorite === '1'">
                        <div v-if="x.deletee !== '1'">
                            <div class="d-flex mb-3 border rounded-3 p-2 bg-white shadow-sm">
                                <div class="p-2"><img :src="baseURL+x.image" alt="contact" class="img-fluid rounded-circle border border-2 p-1 me-3 contact-img" :class="{ 'border-success': x.favorite == '1' }" /></div>
                                <div class="p-2 mt-2"><span class="fs-4 text-capitalize">{{ x.fname }} {{ x.surname }}</span><br />
                                    <span class="fs-6 text-muted lh-lg">+91 {{ x.phone }}</span></div>
                                <div class="ms-auto p-2 d-flex">
                                    <div class="btn-group dropstart">
                                        <button type="button" class="btn btn-link text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical text-dark" viewBox="0 0 16 16">
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                            </svg>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#" @click="unfavorite(x.id, x.fname, x.surname)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z" />
                                                        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
                                                    </svg>
                                                    &nbsp;Mark Un-Favorite</a></li>
                                            <hr class="dropdown-divider">
                                            <li><a class="dropdown-item" href="#" v-on:click="deletee(x.id, x.fname, x.surname)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                                    </svg>&nbsp; Delete</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Notification Toast -->
    <div class="toast-container position-fixed top-0 end-0 p-3 me-5 mt-2">
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" :class="{ 'show': showToastFlag }">
            <div class="toast-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill me-2" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                </svg>
                <strong class="me-auto">Notifications</strong>
                <small>one seconds ago</small>
                <button type="button" class="btn-close" @click="hideToast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-all me-2" viewBox="0 0 16 16">
                    <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                </svg>
                <span class="fw-bold text-capitalize me-1">{{ favoriteContactName }}</span>{{ NotifyMessage }}
            </div>
        </div>
    </div>
    </template>
    
    <script>
    import axios from "axios";
    
    export default {
        data() {
            return {
                // fetch data 
                contacts: [],
    
                // base image url
                baseURL: 'https://lovelake.in/projects/contacts/uploads/',
    
                // Toast notification
                showToastFlag: false,
                favoriteContactName: "",
                NotifyMessage: "",
            }
        },
        mounted() {
            this.fetchData();
        },
        computed: {
            totalfavorite() {
                return this.contacts.filter(x => x.favorite === '1' && x.deletee !== '1').length;
            }
        },
        methods: {
            /*  fetch favorite contacts  */
            fetchData() {
                axios.get('https://lovelake.in/projects/contacts/fetch.php')
                    .then(response => {
                        this.contacts = response.data;
                    })
                    .catch(error => {
                        console.error('Error fetching data:', error);
                        alert("Error fetching data. Please try again.");
                    });
            },
    
            /*  make un-favorite contacts  */
            unfavorite(id, fname, surname) {
                axios.post('https://lovelake.in/projects/contacts/unfavorite.php', {
                        id: id
                    })
                    .then(response => {
                        console.log(response.data);
                        this.fetchData();
                        this.favoriteContactName = fname + " " + surname;
                        this.NotifyMessage = "Marked as unfavorite.";
                        this.showToast();
                    })
                    .catch(error => {
                        console.error('Error deleting data:', error);
                        alert("Error deleting data. Please try again.");
                    });
            },
    
            /*  Move to favorite contacts delete  */
            deletee(id, fname, surname) {
                axios.post('https://lovelake.in/projects/contacts/delete.php', {
                        id: id
                    })
                    .then(response => {
                        console.log(response.data);
                        // Refresh data after successful deletion
                        this.fetchData();
                        this.favoriteContactName = fname + " " + surname;
                        this.NotifyMessage = "Contact Deleted.";
                        this.showToast();
                    })
                    .catch(error => {
                        console.error('Error deleting data:', error);
                        alert("Error deleting data. Please try again.");
                    });
            },
    
            /*  Show toast Notification  */
            showToast() {
                this.showToastFlag = true;
                setTimeout(() => {
                    this.showToastFlag = false;
                }, 5000);
            },
            hideToast() {
                this.showToastFlag = false;
            },
    
        }
    }
    </script>
    
    <style></style>
    