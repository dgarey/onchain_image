// helpful functions

// chop string into chunks, i.e. 64 character chunks
function stringChop(str, size) {
	if (str == null) return [];
	str = String(str);
	size = ~~size;
	return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
}

// read file and return base64
const convertToBase64 = (file) => {
	return new Promise((resolve, reject) => {
		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.onload = () => {
			resolve(fileReader.result);
		};
		fileReader.onerror = (error) => {
			reject(error);
		};
	});
};

// useful for handling upload
const handleFileUpload = async (e) => {
	try {
		const acceptedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
		//const maxSize = 524288; //0.5MB
		const maxSize = 5242880; //5MB
		const file = e.target.files[0];
		if (acceptedTypes.includes(e.target.files[0].type)) {
			if (e.target.files[0].size < maxSize) {
				const base64 = await convertToBase64(file);
				setImg(base64);
				//console.log(stringChop(base64, 64));
			} else {
				alert('File size too large. Maximum allowed file size is 5MB.');
				//alert('File size too large. Maximum allowed file size is 0.5MB.');
			}
		} else {
			alert('Invalid image format. Only jpeg, png, webp and gif formats permitted');
		}
	} catch(err) {
		console.log(err);
	}
};

// use with above inside rendered
// return (
// 		<input type="file" name="file" onChange={handleFileUpload} />
// )
