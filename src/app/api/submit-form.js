// pages/api/submit-form.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Ambil data dari body request
      const { name, email, message } = req.body;
  
      // Simpan data ke database atau lakukan sesuatu dengan data tersebut
      console.log('Received form data:', { name, email, message });
  
      // Kirim respons sukses
      res.status(200).json({ message: 'Form submitted successfully' });
    } else {
      // Jika method bukan POST, kirim pesan error
      res.status(405).json({ message: 'Method not allowed' });
    }
  }