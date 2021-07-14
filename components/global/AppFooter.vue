<template>
<footer class="footer-distributed">

			<div class="footer-left">

				<img src="@/assets/images/logo-white.png" alt="micheduc25 logo">

				<p class="footer-links">
					<nuxt-link to="/">Home</nuxt-link>
                    -
					<nuxt-link to="/services">Services</nuxt-link>
                    -
					<nuxt-link to="/about">About</nuxt-link>
                    -
					<nuxt-link to="/contact">Contact</nuxt-link>
					
				</p>

				<p class="footer-company-name">Micheduc25 © {{currentYear}}</p>

				<div class="footer-icons">

					<a href="https://github.com/Micheduc25"><fa-icon :icon="fab.faGithub" /></a>
					<a href="#"><fa-icon :icon="fab.faTwitter" /></a>
					<a href="#"><fa-icon :icon="fab.faLinkedin" /></a>
					<a href="https://gitlab.com/Micheduc25"><fa-icon :icon="fab.faGitlab" /></a>
					<a href="#"><fa-icon :icon="fab.faWhatsapp" /></a>

				</div>

			</div>

			<div class="footer-right">

				<p>Contact Us</p>

				<form autocomplete="true">

					<input v-model="formData.email" type="text" name="email" placeholder="Email">
					<textarea v-model="formData.message" name="message" placeholder="Message"></textarea>
					<button>Send</button>

				</form>

			</div>

		</footer>
</template>

<script>
import { fab } from '@fortawesome/free-brands-svg-icons'
    export default {
        name:"AppFooter",

        data(){
            return {
                formData:{
                    email:'',
                    message:''
                }
            }
        },
        computed:{
            currentYear(){
                return new Date().getFullYear() ;
               
            },
            fab(){
                return fab;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>