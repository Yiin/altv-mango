export const INTERNAL_EVENTS = {
    SCRIPT_RPC: 'ScriptRPC',
    SCRIPT_RPC_ANSWER: 'ScriptRPCAnswer',
    SERVER_STARTED: 'ServerStarted',
    CONNECTION_QUEUE_ADD: 'ConnectionQueueAdd',
    CONNECTION_QUEUE_REMOVE: 'ConnectionQueueRemove',
    PLAYER_CONNECT: 'PlayerConnect',
    PLAYER_CONNECT_DENIED: 'PlayerConnectDenied',
    PLAYER_DISCONNECT: 'PlayerDisconnect',
    PLAYER_DAMAGE: 'PlayerDamage',
    PLAYER_DEATH: 'PlayerDeath',
    PLAYER_HEAL: 'PlayerHeal',
    PLAYER_CONTROL_REQUEST: 'PlayerControlRequest',
    PLAYER_INTERIOR_CHANGE: 'PlayerInteriorChange',
    PLAYER_DIMENSION_CHANGE: 'PlayerDimensionChange',
    PLAYER_WEAPON_CHANGE: 'PlayerWeaponChange',
    PLAYER_SYNCED_SCENE_REQUEST: 'PlayerSyncedSceneRequest',
    PLAYER_SYNCED_SCENE_START: 'PlayerSyncedSceneStart',
    PLAYER_SYNCED_SCENE_STOP: 'PlayerSyncedSceneStop',
    PLAYER_SYNCED_SCENE_UPDATE: 'PlayerSyncedSceneUpdate',
    PLAYER_SPAWN: 'PlayerSpawn',
    PLAYER_ANIMATION_CHANGE: 'PlayerAnimationChange',
    PLAYER_VEHICLE_ENTERED: 'PlayerVehicleEntered',
    PLAYER_START_VEHICLE_ENTER: 'PlayerStartVehicleEnter',
    PLAYER_VEHICLE_LEFT: 'PlayerVehicleLeft',
    PLAYER_VEHICLE_SEAT_CHANGE: 'PlayerVehicleSeatChange',
    PLAYER_START_TALKING: 'PlayerStartTalking',
    PLAYER_STOP_TALKING: 'PlayerStopTalking',
    PED_HEAL: 'PedHeal',
    PED_DEATH: 'PedDeath',
    PED_DAMAGE: 'PedDamage',
    VEHICLE_DESTROY: 'VehicleDestroy',
    VEHICLE_ATTACH: 'VehicleAttach',
    VEHICLE_DETACH: 'VehicleDetach',
    VEHICLE_DAMAGE: 'VehicleDamage',
    VEHICLE_SIREN_STATE_CHANGE: 'VehicleSirenStateChange',
    VEHICLE_HORN_STATE_CHANGE: 'VehicleHornStateChange',
    VOICE_CONNECTION_CREATE: 'VoiceConnectionCreate',
    CLIENT_OBJECT_DELETE: 'ClientObjectDelete',
    CLIENT_OBJECT_REQUEST: 'ClientObjectRequest',
    BASE_OBJECT_CREATE: 'BaseObjectCreate',
    BASE_OBJECT_REMOVE: 'BaseObjectRemove',
    NET_OWNER_CHANGE: 'NetOwnerChange',
    WEAPON_DAMAGE: 'WeaponDamage',
    META_CHANGE: 'MetaChange',
    LOCAL_META_CHANGE: 'LocalMetaChange',
    STREAM_SYNCED_META_CHANGE: 'StreamSyncedMetaChange',
    GLOBAL_META_CHANGE: 'GlobalMetaChange',
    GLOBAL_SYNCED_META_CHANGE: 'GlobalSyncedMetaChange',
    CONSOLE_COMMAND: 'ConsoleCommand',
    ERROR: 'Error',
    COL_SHAPE_EVENT: 'ColShapeEvent',
    EXPLOSION: 'Explosion',
    FIRE_START: 'FireStart',
    PROJECTILE_START: 'ProjectileStart',
    ENTITY_COL_SHAPE_ENTER: 'EntityColShapeEnter',
    ENTITY_COL_SHAPE_LEAVE: 'EntityColShapeLeave',
    ENTITY_CHECKPOINT_ENTER: 'EntityCheckpointEnter',
    ENTITY_CHECKPOINT_LEAVE: 'EntityCheckpointLeave',
    GIVE_PED_SCRIPTED_TASK: 'GivePedScriptedTask',
    LOCAL_SCRIPT_EVENT: 'LocalScriptEvent',
    REMOTE_SCRIPT_EVENT: 'RemoteScriptEvent',
    RESOURCE_START: 'ResourceStart',
    RESOURCE_STOP: 'ResourceStop',
    RESOURCE_ERROR: 'ResourceError',
    EVENT: 'Event',
};
