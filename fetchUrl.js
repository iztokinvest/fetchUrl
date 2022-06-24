function fetchUrl(option) {
	const formId = option.formId; //Form Id for POST
	const fetchUrl = option.fetchUrl; //PHP Url
	const fetchMethod = option.fetchMethod; //Only for POST
	const fetchDisplayId = option.fetchDisplayId; //ID of element when display content
	const addClassToId = option.addClassToId; //Add classes to ids with object {class:id}
	const removeClassFromId = option.removeClassFromId; //Remove classes from ids with object {class:id}
	const addAttributeToId = option.addAttributeToId; //Add attributes to ids with object {attribute:id}
	const addAttributeToClass = option.addAttributeToId; //Add attributes to classes with object {class:id}
	const removeAttributeFromId = option.removeAttributeFromId; //Remove attribuges from ids with object {attribute:id}
	const msgConfirm = option.msgConfirm; //Confirmation with this text
	const emptyData = option.emptyData; //If true - Clear form values after form submit
	const reloadPage = option.reloadPage; //If true - Reload page after form submit
	let data = {};

	if (fetchMethod == "POST") {
		form = document.getElementById(formId);
		formData = new FormData(form);

		formData.forEach(function (value, key) {
			if (key.indexOf("[]") > 0) {
				single_key = key.replace("[]", "");
				if (!Array.isArray(data[single_key])) {
					data[single_key] = [];
				}
				data[single_key].push(value);
			} else {
				data[key] = value;
			}
		});

		if (form.reportValidity()) {
			fetch(fetchUrl, {
				method: fetchMethod, // or 'PUT',
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			})
				.then((response) => response.json())
				.then((data) => {
					if (data.hasOwnProperty("warning")) {
						alert(data.warning);
						location.reload();
					} else {
						if (data.alert) {
							alert(data.alert);
						}
						if (data.function) {
							window[data.function[0]](data.function[1]);
						}
						if (data.redirect) {
							window.location.href = data.redirect;
						}
						console.log("Success:", data);

						if (fetchDisplayId && data.display) {
							const elementToDisplay =
								document.getElementById(fetchDisplayId);
							elementToDisplay.innerHTML = data.display;
						}
					}

					if (emptyData == true) {
						const formElements = form.elements;
						for (const formElement of formElements) {
							if (formElement.value != "") {
								formElement.value = "";
							}

							console.log(formElement);
						}
					}

					if (reloadPage == true) {
						location.reload();
					}
				})
				.catch((error) => {
					console.error("Error:", error);
					alert("Error, something was wrong");
				});
		}
	} else {
		const elementToDisplay = document.getElementById(fetchDisplayId);
		fetch(fetchUrl)
			.then((data) => data.json())
			.then((success) => fetchData(success));

		function fetchData(success) {
			elementToDisplay.innerHTML = success;
		}
	}

	if (fetchMethod != "POST" || form.reportValidity()) {
		if (msgConfirm) {
			if (confirm(msgConfirm) != true) {
				return;
			}
		}

		if (addClassToId) {
			for (const [addClass, findId] of Object.entries(addClassToId)) {
				document.getElementById(findId).classList.add(addClass);
			}
		}

		if (removeClassFromId) {
			for (const [removeClass, findId] of Object.entries(
				removeClassFromId
			)) {
				document.getElementById(findId).classList.remove(removeClass);
			}
		}

		if (addAttributeToId) {
			for (const [addAttribute, findId] of Object.entries(
				addAttributeToId
			)) {
				document.getElementById(findId).setAttribute(addAttribute, "");
			}
		}

		if (removeAttributeFromId) {
			for (const [removeAttribute, findId] of Object.entries(
				removeAttributeFromId
			)) {
				document
					.getElementById(findId)
					.removeAttribute(removeAttribute);
			}
		}

		if (addAttributeToClass) {
			for (const [addAttribute, findClass] of Object.entries(
				addAttributeToClass
			)) {
				const findedClasses =
					document.getElementsByClassName(findClass);
				for (const findedClass of findedClasses) {
					findedClass.classList.setAttribute(addAttribute, "");
				}
			}
		}
	}
}
