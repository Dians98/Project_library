# Project_library

Syntax tips

    - On utilise ` ` pour créer une string sur plusieurs lignes sans avoir besoin de concaténer les chaînes ou d'utiliser des caractères d'échappement (\n pour les sauts de ligne).

    - Interpolation de variables : Au lieu d'utiliser la concaténation classique avec +, les templates literals permettent d'insérer des variables et des expressions directement dans la chaîne grâce à ${}.

        const name = "John";
        const greeting = `Bonjour, ${name}!`;
        Ici, ${name} est remplacé par la valeur de la variable name.