import {
  ModuleBenefiaryReplaced as ModuleBenefiaryReplacedEvent,
  ModuleCanceled as ModuleCanceledEvent,
  ModuleClaimed as ModuleClaimedEvent,
  ModuleReset as ModuleResetEvent,
  ModuleSet as ModuleSetEvent,
} from '../generated/Heirloom/Heirloom'
import { Module } from '../generated/schema'

export function handleModuleBenefiaryReplaced(
  event: ModuleBenefiaryReplacedEvent
): void {
  const id = event.params._moduleId.toString() + event.params._densityModule.toString() //unique identifier -> union of moduleId and densityModule address
  const module = Module.load(id) //locate entry with matching Id

  if (module) {
    module.beneficiary = event.params._newBeneficiary
    module.save()
  }
}

export function handleModuleCanceled(event: ModuleCanceledEvent): void {
 
}

export function handleModuleClaimed(event: ModuleClaimedEvent): void {
  const id = event.params._moduleId.toString() + event.params._densityModule.toString() //unique identifier -> union of moduleId and densityModule address
  const module = Module.load(id) //locate entry with matching Id

  if (module) {
    module.claimed = true
    module.save()
  }
}

export function handleModuleReset(event: ModuleResetEvent): void {
  const id = event.params._moduleId.toString() + event.params._densityModule.toString() //unique identifier -> union of moduleId and densityModule address
  const module = Module.load(id) //locate entry with matching Id

  if (module) {
    module.timer = event.params._timer
    module.save()
  }
}

export function handleModuleSet(event: ModuleSetEvent): void {
  const id = event.params._moduleId.toString() + event.params._densityModule.toString()

  const module = Module.load(id) //locate entry with matching Id

  if (!module) {
    const entity = new Module(id)
    entity.densityModule = event.params._densityModule
    entity.moduleId = event.params._moduleId
    entity.beneficiary = event.params._beneficiary
    entity.timer = event.params._timer
    entity.claimed = false

    entity.save()
  } else {
    module.densityModule = event.params._densityModule
    module.moduleId = event.params._moduleId
    module.beneficiary = event.params._beneficiary
    module.timer = event.params._timer

    module.save()
  }
}
