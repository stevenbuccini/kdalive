<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', "kdalive-com-wp-caVy82N4" );

/** MySQL database username */
define( 'DB_USER', "mEfTRlLZPkBX" );

/** MySQL database password */
define( 'DB_PASSWORD', "fBKtQUcujKzTP6wH" );

/** MySQL hostname */
define( 'DB_HOST', "localhost:3306" );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'Jy19R1CttQctmxCI*s_7]7vSev4RnuIR j?,T&MgnH+fIBND-L{zF$`8.ib,bE14' );
define( 'SECURE_AUTH_KEY',   '5]~!e;H[sTcMGNh>T~Y5]8flw-R0<06 .8u$GnmsYUs2,qtEA^Egoz,Y%G0dcz$,' );
define( 'LOGGED_IN_KEY',     ']6OFxWLsc(illhw8$Z!R7Oms+_sRYt3|PgXXH0vy`M4Z~p*&e_+,/,>a;~!nFA|n' );
define( 'NONCE_KEY',         'Vu0(aJihXe3;&W.|Ph#m64?P)2qK1E)w@aNmQ{fM14~;(%d4&CBivkrk/vsSXhhx' );
define( 'AUTH_SALT',         '%W>QJ|Ji;v3do{32{:JsgC@B2EsuX)c^W%25+|HUIrT~A![2wY7jkN7,<g^W|Hzi' );
define( 'SECURE_AUTH_SALT',  '7)>>_lv#5)~Q@_1p3~c0;VBEx`/;9:`>]).Vd,4|&1Okx<.8@:iXHv|ELVQwBivi' );
define( 'LOGGED_IN_SALT',    'ZMQi,]C{DO,QTN3neebDK<e0*mC<lSj>tY0Kp^UA-H/l~D.K]y]:k{k37Uba#8f-' );
define( 'NONCE_SALT',        'Qi7:MIn=`s<Lh9z[F_D&8$F%8P(^:>ps>CHaS{!,[$2.m0@Lw L7V:|m2Tm#Wz&M' );
define( 'WP_CACHE_KEY_SALT', ' x-`lAt. 8vLs[6+<dl;n[Lvo(%@h+xinKRs+2{*O5o24%O<~OS:F7jxse>^lZ_O' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = "wp_861c900f9d_";

/**
 * Link to the Youtube playlist for all uploads by Kurt's Youtube channel.
 * Used as the default for video carousels.
 */
define( 'YOUTUBE_UPLOADS_PLAYLIST_LINK', 'https://www.youtube.com/playlist?list=UUmFfnFUifzyTAmm-TEB_hDw');


/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
