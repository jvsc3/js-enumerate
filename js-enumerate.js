let _ = {
    __: {},
    __t: {},
    ___: [
        { key: 38 },
        { key: 74 },
        { key: 23 },
        { key: 322 },
        { key: 80 },
        { key: 311 },
        { key: 256 },
    ]
}

setTick(async() => {
    await Wait(0)
    for (let i = 0; i < _.___.length; i++) {
        if (_.__t[_.___[i].key] == null) {
            _.__t[_.___[i].key] = 0
        }
        if (IsControlJustPressed(0, _.___[i].key)) {
            _.__t[_.___[i].key]++
        }
    }
})

const __reqEnt = async(_, __) => {
    if (DoesEntityExist(_)) {
        NetworkRequestControlOfEntity(_)
        while (!NetworkHasControlOfEntity(_)) {
            await Wait(0)
        }
        if (__) {
            DetachEntity(_, 0, true)
        }
        SetEntityCollision(_, false, false)
        SetEntityAlpha(_, 0.0, true)
        SetEntityAsMissionEntity(_, true, true)
        SetEntityAsNoLongerNeeded(_)
        DeleteEntity(_)
    }
}

var entityEnumerator = {
    __gc: function(_) {
        if (_.destructor && _.handle) {
            _.destructor(_.handle);
        }
        _.destructor = null
        _.handle = null
    }
}

const EnumerateEntities = async(_, __, ___) => {
    return new Proxy(function*() {
        let [__i, __id] = _();
        if (!__id || __id == 0) {
            ___(_)
            return
        }

        let __e = {_h: __i, _d: ___}
        Reflect.set(__e, "__index", entityEnumerator)

        let __n = true
        while (true) {
            yield(__id);
            next = __(__i);
            if (!__n) break;
        }

        [__e._h, __e._d] = [null, null]
        ___(__i)
    })
}
