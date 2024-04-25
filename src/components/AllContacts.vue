<template>
    <div class="container mt-5 ">
        <div class="row">
            <div class="col-xs-12">
                <div class="text-start py-2">
                    <h3>All Contacts</h3>
                    <p>Total contacts: {{ totalContacts }}</p>
                </div>
    
                <!-- vue for loop here for contacts -->
                <div v-for="x in contacts" :key="x.id">
                    <div v-if="x.deletee === '0'">
                        <div class="d-flex mb-3 border rounded-3 p-2 bg-white shadow-sm">
                            <div class="p-2"><img v-bind:src="baseURL+x.image" alt="contact" class="img-fluid rounded-circle border border-0 border-2  border-bottom border-end border-secondary-subtle p-1 me-3 contact-img" :class="{ 'border-success': x.favorite == '1' }" @click="showImage(x.id, x.fname, x.surname, x.phone, x.image)" data-bs-toggle="modal" data-bs-target="#showimg" />
                            </div>
                            <div class="p-2 mt-2"><span class="fs-4 text-capitalize">{{ x.fname }} {{ x.surname }}</span><br />
                                <span class="fs-6 text-muted lh-lg">+91 {{ x.phone }}</span>
                            </div>
                            <div class="ms-auto p-2 d-flex">
                                <!-- Default dropstart button -->
                                <div class="btn-group dropstart">
                                    <button type="button" class="btn btn-link text-decoration-none " data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical text-dark" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                        </svg>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#" v-on:click="copyToClipboard(x.id, x.fname, x.surname, x.phone)">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-front" viewBox="0 0 16 16">
                                                    <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2z" />
                                                </svg>
                                                &nbsp;Copy</a>
                                        </li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2" v-on:click="updatee(x.id, x.fname, x.surname, x.phone, x.image)">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                                                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
                                                </svg>
                                                &nbsp;Edit</a></li>
                                        <hr class="dropdown-divider" />
    
                                        <li v-if="x.favorite != '1'">
                                            <a class="dropdown-item" href="#" v-on:click="Mkfavorite(x.id, x.fname, x.surname)">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                                </svg>
                                                &nbsp;Mark as favorite
                                            </a>
                                        </li>
                                        <li v-else>
                                            <a class="dropdown-item text-danger" href="#" v-on:click="unfavorite(x.id, x.fname, x.surname)">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill text-danger" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                                </svg>
                                                &nbsp;Mark Un-favorite
                                            </a>
                                        </li>
    
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#" v-on:click="deletee(x.id, x.fname, x.surname)">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                                </svg>&nbsp;
                                                Delete</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Model 1 Create Contact -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create New Contact</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="createClose()"></button>
                </div>
                <div class="modal-body">
                    <div class="row mx-3 my-3">
                        <div class="text-center py-2">
                            <div v-if="createImagePreviewUrl">
                                <img :src="createImagePreviewUrl" class="img-thumbnail rounded-4 mb-3" alt="Profile Pic" style="width: 160px; height: 160px; object-fit: cover;">
                            </div>
                            <div class="mb-3 px-5 " style="margin-top: -20px;">
                                <label for="formFileSm" class="form-label">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-camera-fill bg-white border p-2 rounded-pill" viewBox="0 0 16 16">
                                        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
                                    </svg>
                                </label>
                                <input type="file" @change="previewCreateImage" accept="image/*" class="form-control form-control-sm d-none" id="formFileSm" />
                            </div>
                            <p>Upload Profile Pic</p>
                        </div>
                        <div class="col p-2 m-0">
                            <label for="exampleInputEmail1" class="form-label">First name</label>
                            <input type="text" class="form-control p-2" v-model="fname">
                        </div>
                        <div class="col p-2 m-0">
                            <label for="exampleInputEmail1" class="form-label">Surname</label>
                            <input type="text" class="form-control p-2" v-model="surname">
                        </div>
                        <div class="row p-0 m-0">
                            <div class="col p-2 m-0">
                                <label for="exampleInputEmail1" class="form-label">Phone</label>
                                <div class="d-flex">
                                    <div class="flex-shrink-1 p-0 m-0">
                                        <p class=" border p-2 rounded">+91</p>
                                    </div>
                                    <div class="w-100"><input type="text" class="form-control p-2 ms-2" v-model="phone" @input="restrictInput" maxlength="10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer mt-2 border-0">
                    <button type="button" class="btn btn-primary" @click="createContact()" data-bs-dismiss="modal">Save Contact</button>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Model 2 Update Contact -->
    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel2">Update Contact</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="updateClose()"></button>
                </div>
                <div class="modal-body">
                    <div class="row mx-3 my-3">
                        <div class="text-center py-2">
    
                            <!-- Show the current image -->
                            <img :src="baseURL + uimage" v-if="!updateImagePreviewUrl" class="img-thumbnail rounded-4 mb-3" alt="Profile Pic" style="width: 160px; height: 160px; object-fit: cover;">
    
                            <!-- Show the newly uploaded image preview if available -->
                            <img :src="updateImagePreviewUrl" v-if="updateImagePreviewUrl" class="img-thumbnail rounded-4 mb-3" alt="Profile Pic" style="width: 160px; height: 160px; object-fit: cover;">
    
                            <div class="mb-3 px-5" style="margin-top: -20px;">
                                <label for="mynewupload" class="form-label">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-camera-fill bg-white border p-2 rounded-pill" viewBox="0 0 16 16">
                                        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
                                    </svg>
                                </label>
                                <!-- Input for uploading a new image -->
                                <input type="file" @change="previewUpdateImage" accept="image/*" class="form-control form-control-sm d-none" id="mynewupload">
                            </div>
                            <p>Update Profile Pic</p>
                        </div>
                        <div class="col p-2 m-0">
                            <label for="exampleInputEmail1" class="form-label">First name</label>
                            <input type="hidden" class="form-control p-2" v-model="uid">
                            <input type="text" class="form-control p-2" v-model="ufname">
                        </div>
                        <div class="col p-2 m-0">
                            <label for="exampleInputEmail1" class="form-label">Surname</label>
                            <input type="text" class="form-control p-2" v-model="usurname">
                        </div>
                        <div class="row p-0 m-0">
                            <div class="col p-2 m-0">
                                <label for="exampleInputEmail1" class="form-label">Phone</label>
                                <div class="d-flex">
                                    <div class="flex-shrink-1 p-0 m-0">
                                        <p class=" border p-2 rounded">+91</p>
                                    </div>
                                    <div class="w-100"><input type="text" class="form-control p-2 ms-2" v-model="uphone" @input="restrictInput" maxlength="10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer mt-2 border-0">
                    <button type="button" class="btn btn-primary " data-bs-dismiss="modal" aria-label="Close" @click="updateContact()">Update Contact</button>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Modal 3 image click show contact -->
    <div class="modal fade" id="showimg" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <button type="button" class="btn-close fs-4" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body mx-3  p-2 rounded-3 mb-2  ">
                    <div class="text-center">
                        <!-- Show the current image -->
                        <img :src="baseURL+simage" class="img-thumbnail rounded-4 mb-3 rounded-circle border border-0 border-2  border-bottom border-end border-secondary-subtle" alt="Profile Pic" style="width: 240px; height: 240px; object-fit: cover;">
                    </div>
                    <div class="col p-2 m-0 text-center">
                        <h2 class="text-capitalize hh2 mb-2">{{ sfname +" "+ ssurname }}</h2>
                        <div class="d-flex mt-3 ms-3">
                            <div class="flex-shrink-1 p-0 m-0">
                                <p class=" border p-2 rounded border border-2 border-end border-bottom border-danger-subtle shadow-sm" v-on:click="copyToClipboardd(sfname, ssurname,sphone)" style="cursor: pointer;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-front" viewBox="0 0 16 16">
                                        <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2z" />
                                    </svg> Copy</p>
                            </div>
                            <div class="w-75"><input type="text" class="form-control p-2 ms-2 border-2 border-secondary-subtle shadow-none bg-white" v-model="sphone" @input="restrictInput" maxlength="10" disabled></div>
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
                // insert data val
                fname: '',
                surname: '',
                phone: '',
                createImagePreviewUrl: null,
                file: null,
    
                // fetch data val
                contacts: [],
    
                // update data val
                uid: '',
                ufname: '',
                usurname: '',
                uphone: '',
                uimage: '',
                updateImagePreviewUrl: '',
                updateFile: null,
    
                // local image path to show image
                baseURL: 'https://lovelake.in/projects/contacts/uploads/',
    
                // Toast notification
                showToastFlag: false,
                favoriteContactName: "",
                NotifyMessage: "",
    
                // Copy number val
                textToCopy: 'Text to be copied',
    
                // favorite border color change val
                className: 'border-success',
    
                // Show profile image on Click
                sid: '',
                sfname: '',
                ssurname: '',
                sphone: '',
                simage: '',
            }
        },
        mounted() {
            this.fetchData();
        },
        computed: {
            totalContacts() {
                return this.filteredContacts.length;
            },
            filteredContacts() {
                return this.contacts.filter(contact => contact.deletee !== '1');
            }
        },
        methods: {
    
            /* For creating a contact Preview Image */
            previewCreateImage(event) {
                const file = event.target.files[0];
                if (file) {
                    this.createFile = file;
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        this.createImagePreviewUrl = e.target.result;
                    };
                    reader.readAsDataURL(file);
                } else {
                    this.createImagePreviewUrl = null;
                    this.createFile = null;
                }
            },
    
            /* For creating a contact send data to database with image */
            createContact() {
                let formData = new FormData();
                formData.append('fname', this.fname);
                formData.append('surname', this.surname);
                formData.append('phone', this.phone);
    
                // Check if a file is uploaded for creating contact
                if (this.createFile) {
                    formData.append('image', this.createFile); // Use createFile instead of file
                }
                axios.post('https://lovelake.in/projects/contacts/insert.php', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(response => {
                    console.log(response.data);
                    if(response.data === 'Invalid file type. Only JPG, JPEG, PNG, and GIF files are allowed.'){
                        this.favoriteContactName = "Alert:";
                        this.NotifyMessage = "Invalid file type. Only JPG, JPEG, PNG, and GIF files are allowed.";
                        this.showToast();
                    }
                    this.fname = '';
                    this.surname = '';
                    this.phone = '';
                    this.createFile = null; // Clear the createFile variable
                    this.createImagePreviewUrl = null; // Clear the createImagePreviewUrl
                    this.fetchData();
                }).catch(error => {
                    console.error(error);
                    
                    // Handle errors
                });
            },
    
            /* create contact cancel button / reset values */
            createClose() {
                this.fname = '';
                this.surname = '';
                this.phone = '';
                this.createFile = null; // Clear the createFile variable
                this.createImagePreviewUrl = null; // Clear the createImagePreviewUrl
                this.fetchData();
            },
    
            /*  update contact cancel button / reset values  */
            updateClose() {
                this.ufname = '';
                this.usurname = '';
                this.uphone = '';
                this.updateFile = null; // Clear the createFile variable
                this.updateImagePreviewUrl = null; // Clear the createImagePreviewUrl
                this.fetchData();
            },
    
            /* For updating a new Preview Image  */
            previewUpdateImage(event) {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        this.updateImagePreviewUrl = e.target.result;
                    };
                    reader.readAsDataURL(file);
                    this.updateFile = file; // Move this line inside the 'if (file)' block
                } else {
                    this.updateImagePreviewUrl = null;
                    this.updateFile = null;
                }
            },
    
            /*  fetch updation values for model box  */
            updatee(id, fname, surname, phone, image) {
                this.uid = id;
                this.ufname = fname;
                this.usurname = surname;
                this.uphone = phone;
                this.uimage = image;
            },
    
            /*  For edit & updating a contact send data to database with image */
            updateContact() {
                // Create a FormData object
                let formData = new FormData();
    
                // Append additional data (uid, ufname, usurname, uphone) to the FormData object
                formData.append('uid', this.uid);
                formData.append('ufname', this.ufname);
                formData.append('usurname', this.usurname);
                formData.append('uphone', this.uphone);
    
                // Append the updated image if available
                if (this.updateFile) {
                    formData.append('image', this.updateFile);
                }
    
                axios.post('https://lovelake.in/projects/contacts/update.php', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(response => {
                    console.log(response.data);
                    // Clear the data properties after successful upload
                    if(response.data === 'Invalid file type. Only JPG, JPEG, PNG, and GIF files are allowed.'){
                        this.favoriteContactName = "Alert:";
                        this.NotifyMessage = "Invalid file type. Only JPG, JPEG, PNG, and GIF files are allowed.";
                        this.showToast();
                    }
                    this.uid = '';
                    this.ufname = '';
                    this.usurname = '';
                    this.uphone = '';
                    this.updateFile = null;
                    this.updateImagePreviewUrl = null;
                    this.fetchData();
                }).catch(error => {
                    console.error(error);
                    // Handle errors
                });
            },
    
            /*  restrictInput input field  */
            restrictInput(event) {
                // Remove non-numeric characters
                let sanitizedInput = event.target.value.replace(/\D/g, '');
    
                // Limit to 10 characters
                if (sanitizedInput.length > 10) {
                    sanitizedInput = sanitizedInput.slice(0, 10);
                }
    
                // Update the input field
                this.phone = sanitizedInput;
            },
    
            /* copy button code  */
            copyToClipboard(id, fname, surname, phone) {
                navigator.clipboard.writeText(phone)
                    .then(() => {
                        // Success message or further action
                        this.favoriteContactName = fname + " " + surname;
                        this.NotifyMessage = "Contact Copied to clipboard";
                        this.showToast();
                    })
                    .catch(err => {
                        // Error handling
                        console.error('Could not copy text: ', err);
                    });
            },
    
            /*  copy button 2 code  */
            copyToClipboardd(sfname, ssurname, sphone) {
                navigator.clipboard.writeText(sphone)
                    .then(() => {
                        // Success message or further action
                        this.favoriteContactName = sfname + " " + ssurname;
                        this.NotifyMessage = "Contact Copied to clipboard";
                        this.showToast();
    
                    })
                    .catch(err => {
                        // Error handling
                        console.error('Could not copy text: ', err);
                    });
            },
    
            /*  Show notification Toast code  */
            showToast() {
                this.showToastFlag = true;
                setTimeout(() => {
                    this.showToastFlag = false;
                }, 5000);
            },
            hideToast() {
                this.showToastFlag = false;
            },
    
            /*  Fetch contact from database  */
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
    
            /*   Make favorite code  */
            Mkfavorite(id, fname, surname) {
                axios.post('https://lovelake.in/projects/contacts/favorite.php', {
                        id: id
                    })
                    .then(response => {
                        console.log(response.data);
                        // Refresh data after successful operation
                        this.fetchData();
                        this.favoriteContactName = fname + " " + surname;
                        this.NotifyMessage = "Marked as Favorite.";
                        this.showToast();
                    })
                    .catch(error => {
                        console.error('Error marking favorite:', error);
                        alert("Error marking favorite. Please try again.");
                    });
            },
    
            /*  Make un-favorite code  */
            unfavorite(id, fname, surname) {
                axios.post('https://lovelake.in/projects/contacts/unfavorite.php', {
                        id: id
                    })
                    .then(response => {
                        console.log(response.data);
                        // Refresh data after successful operation
                        this.fetchData();
                        this.favoriteContactName = fname + " " + surname;
                        this.NotifyMessage = "Marked as unfavorite.";
                        this.showToast();
                    })
                    .catch(error => {
                        console.error('Error marking favorite:', error);
                        alert("Error marking favorite. Please try again.");
                    });
            },
    
            /*  delete contact code  */
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
            /*  Show image code  */
            showImage(id, fname, surname, phone, image) {
                this.sid = id;
                this.sfname = fname;
                this.ssurname = surname;
                this.sphone = "+91 " + phone;
                this.simage = image;
            },
    
        }
    }
    </script>
    
    <style>
    </style>
    