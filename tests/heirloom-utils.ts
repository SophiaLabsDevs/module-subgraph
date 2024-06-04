import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ModuleBenefiaryReplaced,
  ModuleCanceled,
  ModuleClaimed,
  ModuleReset,
  ModuleSet
} from "../generated/Heirloom/Heirloom"

export function createModuleBenefiaryReplacedEvent(
  _densityModule: Address,
  _moduleId: BigInt,
  _previousBeneficiary: Address,
  _newBeneficiary: Address
): ModuleBenefiaryReplaced {
  let moduleBenefiaryReplacedEvent = changetype<ModuleBenefiaryReplaced>(
    newMockEvent()
  )

  moduleBenefiaryReplacedEvent.parameters = new Array()

  moduleBenefiaryReplacedEvent.parameters.push(
    new ethereum.EventParam(
      "_densityModule",
      ethereum.Value.fromAddress(_densityModule)
    )
  )
  moduleBenefiaryReplacedEvent.parameters.push(
    new ethereum.EventParam(
      "_moduleId",
      ethereum.Value.fromUnsignedBigInt(_moduleId)
    )
  )
  moduleBenefiaryReplacedEvent.parameters.push(
    new ethereum.EventParam(
      "_previousBeneficiary",
      ethereum.Value.fromAddress(_previousBeneficiary)
    )
  )
  moduleBenefiaryReplacedEvent.parameters.push(
    new ethereum.EventParam(
      "_newBeneficiary",
      ethereum.Value.fromAddress(_newBeneficiary)
    )
  )

  return moduleBenefiaryReplacedEvent
}

export function createModuleCanceledEvent(
  _densityModule: Address,
  _moduleId: BigInt,
  _timer: BigInt
): ModuleCanceled {
  let moduleCanceledEvent = changetype<ModuleCanceled>(newMockEvent())

  moduleCanceledEvent.parameters = new Array()

  moduleCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "_densityModule",
      ethereum.Value.fromAddress(_densityModule)
    )
  )
  moduleCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "_moduleId",
      ethereum.Value.fromUnsignedBigInt(_moduleId)
    )
  )
  moduleCanceledEvent.parameters.push(
    new ethereum.EventParam("_timer", ethereum.Value.fromUnsignedBigInt(_timer))
  )

  return moduleCanceledEvent
}

export function createModuleClaimedEvent(
  _densityModule: Address,
  _moduleId: BigInt,
  _beneficiary: Address
): ModuleClaimed {
  let moduleClaimedEvent = changetype<ModuleClaimed>(newMockEvent())

  moduleClaimedEvent.parameters = new Array()

  moduleClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "_densityModule",
      ethereum.Value.fromAddress(_densityModule)
    )
  )
  moduleClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "_moduleId",
      ethereum.Value.fromUnsignedBigInt(_moduleId)
    )
  )
  moduleClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "_beneficiary",
      ethereum.Value.fromAddress(_beneficiary)
    )
  )

  return moduleClaimedEvent
}

export function createModuleResetEvent(
  _densityModule: Address,
  _moduleId: BigInt,
  _timer: BigInt
): ModuleReset {
  let moduleResetEvent = changetype<ModuleReset>(newMockEvent())

  moduleResetEvent.parameters = new Array()

  moduleResetEvent.parameters.push(
    new ethereum.EventParam(
      "_densityModule",
      ethereum.Value.fromAddress(_densityModule)
    )
  )
  moduleResetEvent.parameters.push(
    new ethereum.EventParam(
      "_moduleId",
      ethereum.Value.fromUnsignedBigInt(_moduleId)
    )
  )
  moduleResetEvent.parameters.push(
    new ethereum.EventParam("_timer", ethereum.Value.fromUnsignedBigInt(_timer))
  )

  return moduleResetEvent
}

export function createModuleSetEvent(
  _densityModule: Address,
  _moduleId: BigInt,
  _beneficiary: Address,
  _timer: BigInt
): ModuleSet {
  let moduleSetEvent = changetype<ModuleSet>(newMockEvent())

  moduleSetEvent.parameters = new Array()

  moduleSetEvent.parameters.push(
    new ethereum.EventParam(
      "_densityModule",
      ethereum.Value.fromAddress(_densityModule)
    )
  )
  moduleSetEvent.parameters.push(
    new ethereum.EventParam(
      "_moduleId",
      ethereum.Value.fromUnsignedBigInt(_moduleId)
    )
  )
  moduleSetEvent.parameters.push(
    new ethereum.EventParam(
      "_beneficiary",
      ethereum.Value.fromAddress(_beneficiary)
    )
  )
  moduleSetEvent.parameters.push(
    new ethereum.EventParam("_timer", ethereum.Value.fromUnsignedBigInt(_timer))
  )

  return moduleSetEvent
}
