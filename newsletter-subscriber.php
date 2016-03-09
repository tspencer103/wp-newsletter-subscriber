<?php
/**
* Plugin Name: Newsletter Subscriber
* Description: Form to subscribe to newsletter
* Ver 1.0
* Author: Tim Spencer 
*/

// Exit if direct access
if (!defined('ABSPATH')) {
	exit;
}

// Load Scripts
require_once(plugin_dir_path(__FILE__) . '/includes/newsletter-subscriber-scripts.php');
// Load Class
require_once(plugin_dir_path(__FILE__) . '/includes/newsletter-subscriber-class.php');

// Register Widget
function register_newsletter_subscriber() {
	register_widget('Newsletter_Subscriber_Widget');
}

add_action('widgets_init', 'register_newsletter_subscriber');

