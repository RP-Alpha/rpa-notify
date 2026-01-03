local function Notify(source, msg, type, length)
    TriggerClientEvent('rpa-notify:client:Notify', source, msg, type, length)
end

exports('Notify', Notify)
