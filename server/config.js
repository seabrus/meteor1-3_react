ServiceConfiguration.configurations.upsert(
    { service: "github" },
    {
        $set: {
            clientId: "9254ebc0b65744a27855",
            loginStyle: "popup",
            secret: "bacfe5fae9642283dce2408b046c1ca591ab41c6"
        }
    }
);
