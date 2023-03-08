import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"

function handleUpload(){
    if(!file){
        alert("Please choose a file first!0");
    }

    const storageRef = ref(storage, `/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes)*100
            );

            setPercent(percent);
        }, (err) => console.log(err),
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
            });
        }
    )
}