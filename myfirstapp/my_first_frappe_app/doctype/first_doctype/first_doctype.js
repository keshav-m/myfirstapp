// Copyright (c) 2016, Keshav and contributors
// For license information, please see license.txt

frappe.ui.form.on('First DocType', {
	refresh: function(frm) {

	}
});


frappe.ui.form.on("First DocType", "validate", function(frm){
 if (!isMobileNoValid(frm.doc.contact_number)) {
 flashMessage();
 validated = false;
 }
});

function isMobileNoValid(mobno) {
 var rx = new RegExp("^[789]\\\\d{9}$"); 
 var isvalid = rx.test(mobno);
 return isvalid;
}

function flashMessage() {
 msgprint(__("Entered Mobile No. is either incomplete or invalid. <br /> Tip: Add it without the +0 or +91 at the beginning.", "Invalid Mobile No"));
}

