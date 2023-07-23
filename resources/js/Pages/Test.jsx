import { useNavigate } from "react-router-dom";
function Test() {
  console.log("Pezddec")
  fetch('/Oggylib/public/api/login', {
    method: 'post',
    body: JSON.stringify({
      name: 'ivan',
    }),
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json'

    }

  })


}

export default Test;