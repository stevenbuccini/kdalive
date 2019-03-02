<?php
/**
 * Template part for displaying archive posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package kdalive
 */

/* This is a custom template based on content.php */

?>

<article id="post-<?php the_ID(); ?>" class="kd-archive">
	
	<?php the_post_thumbnail('thumbnail'); ?>
	
	<header class="entry-header">
		<?php
		if ( is_singular() ) :
			the_title( '<h1 class="entry-title">', '</h1>' );
		else :
			the_title( '<h3 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' );
		endif;

		if ( 'post' === get_post_type() ) :
			?>
			<div class="entry-meta">
				<?php
				kdalive_posted_on();
				//kdalive_posted_by();
				?>
			</div><!-- .entry-meta -->
		<?php endif; ?>
	</header><!-- .entry-header -->
	
	<footer class="entry-footer">
		<?php kdalive_entry_footer(); ?>
	</footer><!-- .entry-footer -->

	<div class="clearfix"></div>
	
</article><!-- #post-<?php the_ID(); ?> -->
