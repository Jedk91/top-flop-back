import * as authService from "../services/authService.js";

export async function register(req, res) {
  try {
    const newUser = req.body;

    if (await authService.emailAlreadyUsed(newUser.email)) {
      return res.status(409).json({
        error: "Cette adresse email est déjà utilisée",
      });
    }

    const userAdded = await authService.insert(newUser);

    return res.status(201).json(userAdded);
  } catch (error) {
    return res.status(500).json({
      error: "Une erreur est survenue",
    });
  }
}
