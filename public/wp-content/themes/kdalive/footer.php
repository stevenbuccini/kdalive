<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package kdalive
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
		
		<div id="footer-logo"><?php the_custom_logo();?></div>
		
		<div id="footer-newsletter">
			<img class="footer-newsletter-img" src="/wp-content/uploads/newsletter.png" />
			<div class="footer-newsletter-form">
				<h3>Subscribe to my newsletter</h3>
				<p>Want to get the latest tips and travel updates?</p>
				
				<!-- Begin MailChimp Signup Form -->
				<div id="mc_embed_signup">
				<form action="https://kdalive.us14.list-manage.com/subscribe/post?u=fdc3b3254ce41ef81928010c8&amp;id=3f0c7a0194" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
					<div id="mc_embed_signup_scroll">

				<div class="mc-field-group">
					<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Your email here">
					<input type="text" value="" name="MMERGE7" class="required" id="mce-MMERGE7" placeholder="Country">
				</div>
					<div id="mce-responses" class="clear">
						<div class="response" id="mce-error-response" style="display:none"></div>
						<div class="response" id="mce-success-response" style="display:none"></div>
					</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
					<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_fdc3b3254ce41ef81928010c8_3f0c7a0194" tabindex="-1" value=""></div>
					<div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
					</div>
				</form>
				</div>
				<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
				<!-- End MailChimp Signup Form -->
				
			</div>
		</div>
		
		<div id="footer-follow">
			<h3>Follow us on</h3>
			<div class="follow-links">
				<a href="https://www.instagram.com/kdalive/" target="_blank"><i class="fab fa-instagram"></i></a>
				<a href="https://www.facebook.com/KDaLive-1633027683669751" target="_blank"><i class="fab fa-facebook-square"></i></a>
				<a href="https://www.youtube.com/user/kudavis" target="_blank"><i class="fab fa-youtube-square"></i></a>
				<a href="https://www.snapchat.com/add/KDalive" target="_blank"><i class="fab fa-snapchat-square"></i></a>
			</div>
		</div>
		
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
