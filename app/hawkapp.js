document.addEventListener('alpine:init', () => {
    // Alpine.store()
    Alpine.data('app', function () {
        return {
            NAVIGATION: '',
            isLoggedIn: true,
            name: '',
            address: '',
            contact: '',


            init() {
                console.log(this.isLoggedIn);
                // axios call to check if a user is logged in 
                if (this.isLoggedIn) {
                    this.NAVIGATION = 'services'
                } else {
                    this.NAVIGATION = 'login'
                }
            },




            signIn() {
                console.log('signing in');
                if (this.name != '' && this.address != '' && this.contact != '') {
                    this.isLoggedIn = true;
                    this.NAVIGATION = 'services'
                } else {
                    console.log('PLEASE INPUT YOUR DETAILS!');
                };


            },

            register({ event }) {
                // event.preventDefault()
                console.log('registering...');
                if (this.name != '' && this.address != '' && this.contact != '') {
                    this.isLoggedIn = true;
                    this.NAVIGATION = 'home'
                } else {
                    console.log('PLEASE INPUT YOUR DETAILS!');
                }
            }
        }
    });
});
