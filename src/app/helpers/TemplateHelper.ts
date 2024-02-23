import handlebars from "handlebars";
import fs from "fs";


export const criarTemplate = (caminho) => {
    const htmlFile = fs.readFileSync(caminho, "utf-8");
    handlebars.registerHelper("numberFormat", (number: Number) => {
        return number.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
    })
    handlebars.registerHelper("dateFormat", (data: Date) => {
        return `${data.toLocaleDateString()} - ${data.toLocaleTimeString()}`;
    })
    handlebars.registerHelper("formataCPF", (cpf: string) => {
        return `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6, 9)}-${cpf.substring(9)}`;
    })
    const template = handlebars.compile(htmlFile);
    return template;
}