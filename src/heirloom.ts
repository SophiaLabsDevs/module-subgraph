import {
  ModuleBenefiaryReplaced as ModuleBenefiaryReplacedEvent,
  ModuleCanceled as ModuleCanceledEvent,
  ModuleClaimed as ModuleClaimedEvent,
  ModuleReset as ModuleResetEvent,
  ModuleSet as ModuleSetEvent
} from "../generated/Heirloom/Heirloom"
import {
  ModuleBenefiaryReplaced,
  ModuleCanceled,
  ModuleClaimed,
  ModuleReset,
  ModuleSet
} from "../generated/schema"

export function handleModuleBenefiaryReplaced(
  event: ModuleBenefiaryReplacedEvent
): void {
  let entity = new ModuleBenefiaryReplaced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._densityModule = event.params._densityModule
  entity._moduleId = event.params._moduleId
  entity._previousBeneficiary = event.params._previousBeneficiary
  entity._newBeneficiary = event.params._newBeneficiary

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModuleCanceled(event: ModuleCanceledEvent): void {
  let entity = new ModuleCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._densityModule = event.params._densityModule
  entity._moduleId = event.params._moduleId
  entity._timer = event.params._timer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModuleClaimed(event: ModuleClaimedEvent): void {
  let entity = new ModuleClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._densityModule = event.params._densityModule
  entity._moduleId = event.params._moduleId
  entity._beneficiary = event.params._beneficiary

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModuleReset(event: ModuleResetEvent): void {
  let entity = new ModuleReset(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._densityModule = event.params._densityModule
  entity._moduleId = event.params._moduleId
  entity._timer = event.params._timer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleModuleSet(event: ModuleSetEvent): void {
  let entity = new ModuleSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._densityModule = event.params._densityModule
  entity._moduleId = event.params._moduleId
  entity._beneficiary = event.params._beneficiary
  entity._timer = event.params._timer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
