<div class="row my-5 justify-content-center">
	<div class="col-md-12 col-lg-8 text-center">
		<h1><span class="highlight px-3">CONTACT ME</span></h1>
		<p class="my-4">
			I'm available for collaboration or consultation opportunities. Fill out the form below or drop
			me a line at <a href="mailto:abdevelops&#64;gmail.com"
				>ab<!-- abc@def -->develops@gmail<!-- @abc.com -->.com</a
			>.
		</p>
		<a
			class="btn btn-outline-primary btn-lg"
			href="https://www.linkedin.com/in/aaron-billings-9b429610a/"
			target="_blank"
			role="button">CONNECT ON LINKEDIN</a
		>
	</div>
</div>
<!-- Begin contact form -->
<div class="row justify-content-center text-center">
	<div class="col-10 col-md-8">
		<div class="form-floating mb-3">
			<input type="text" class="form-control" id="Name" />
			<label for="Name">Your Name</label>
		</div>
		<div class="form-floating mb-3">
			<input type="email" class="form-control" id="Email" />
			<label for="Email">Email</label>
		</div>
		<div class="form-floating mb-3">
			<input type="tel" class="form-control" id="Tel" />
			<label for="Tel">Phone</label>
		</div>
		<div class="form-floating mb-3">
			<textarea class="form-control" id="Message" style="height:150px"></textarea>
			<label for="Message">How can I help you?</label>
		</div>
		<input class="btn btn-primary btn-lg" type="submit" value="Send Message" />
	</div>
</div>

<style>
	/* Contact page */
	.form-control {
		border-radius: 0;
	}
	.form-control:focus {
		border-color: var(--blue);
	}
	.form-floating > .form-control-plaintext ~ label,
	.form-floating > .form-control:focus ~ label,
	.form-floating > .form-control:not(:placeholder-shown) ~ label,
	.form-floating > .form-select ~ label {
		text-transform: uppercase;
		color: var(--mdgray);
	}
</style>
