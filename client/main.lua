local function Notify(msg, type, length)
    SendNUIMessage({
        action = 'notify',
        message = msg,
        type = type,
        length = length
    })
end

RegisterNetEvent('rpa-notify:client:Notify', function(msg, type, length)
    Notify(msg, type, length)
end)

exports('Notify', Notify)
