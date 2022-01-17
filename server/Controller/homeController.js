export const home = (req, res) => {
  res.render("index", { name: "John" });
};
export const login = (req, res) => {
  res.render("login", { name: "John" });
};
