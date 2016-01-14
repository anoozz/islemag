<form class="navbar-form animated fadeInDown"  role="search" action="<?php echo home_url( '/' ); ?>">
		<span class="screen-reader-text"><?php echo _x( 'Search for:', 'label', 'islemag' ) ?></span>
		<input type="search" id="s" name="s" class="form-control" placeholder="<?php echo esc_attr_x( 'Search in here...', 'placeholder', 'islemag' ) ?>" title="<?php echo esc_attr_x( 'Search for:', 'label', 'islemag' ) ?>">
		<button type="submit" title="Search"><i class="fa fa-search"></i></button>
</form>
