function status(request, response) {
  response.status(200).json({ chave: "uma string qualquer Ação" });
}

export default status;
