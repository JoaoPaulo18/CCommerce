const accessToken = "bca940cf9eab3eecf44cd7e015a6c3da1478533c"; // Coloque seu token de acesso aqui
const storeId = "5390223"; // Coloque seu store ID aqui
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import https from "https";
import fs from "fs";
const app = express();
app.use(cors()); // Habilitar CORS

// Defina seu token de acesso e store ID diretamente no código
const PORT = process.env.PORT || 3000;

app.get("/produtos", async (req, res) => {
  try {
    const queryParams = req.query;
    const queryString = new URLSearchParams(queryParams).toString();

    const response = await fetch(
      `https://api.tiendanube.com/v1/${storeId}/products${
        queryParams ? `?${queryString}` : ""
      }`,
      {
        method: "GET",
        headers: {
          Authentication: `bearer ${accessToken}`,
          "Content-Type": "application/json",
          "User-Agent": "Loja (devjoaomoreira@email.com)",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Erro: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const draftOrderData = {
  contact_name: "João",
  contact_lastname: "Paulo",
  contact_email: "joaomoreira18012006@gmail.com",
  payment_status: "unpaid",
  products: [
    {
      variant_id: 1048977915, // Substitua pelo ID do produto variante
      quantity: 1, // Propriedades customizadas, se necessário
    },
  ],
};
app.get("/carrinho", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.tiendanube.com/v1/${storeId}/draft_orders`,
      {
        method: "POST",
        headers: {
          Authentication: `bearer ${accessToken}`,
          "Content-Type": "application/json",
          "User-Agent": "Loja (devjoaomoreira@email.com)",
        },
        body: JSON.stringify(draftOrderData),
      }
    );
    if (!response.ok) {
      throw new Error(`Erro: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    return;
  }
});

const options = {
  key: fs.readFileSync(
    "/etc/letsencrypt/live/cyberneticsonline.zapto.org/privkey.pem"
  ),
  cert: fs.readFileSync(
    "/etc/letsencrypt/live/cyberneticsonline.zapto.org/fullchain.pem"
  ),
};

https.createServer(options, app).listen(PORT, () => {
  console.log(`Servidor HTTPS rodando na porta ${PORT}`);
});
