import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ModuleBenefiaryReplaced } from "../generated/schema"
import { ModuleBenefiaryReplaced as ModuleBenefiaryReplacedEvent } from "../generated/Heirloom/Heirloom"
import { handleModuleBenefiaryReplaced } from "../src/heirloom"
import { createModuleBenefiaryReplacedEvent } from "./heirloom-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _densityModule = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _moduleId = BigInt.fromI32(234)
    let _previousBeneficiary = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _newBeneficiary = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newModuleBenefiaryReplacedEvent = createModuleBenefiaryReplacedEvent(
      _densityModule,
      _moduleId,
      _previousBeneficiary,
      _newBeneficiary
    )
    handleModuleBenefiaryReplaced(newModuleBenefiaryReplacedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ModuleBenefiaryReplaced created and stored", () => {
    assert.entityCount("ModuleBenefiaryReplaced", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ModuleBenefiaryReplaced",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_densityModule",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ModuleBenefiaryReplaced",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_moduleId",
      "234"
    )
    assert.fieldEquals(
      "ModuleBenefiaryReplaced",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_previousBeneficiary",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ModuleBenefiaryReplaced",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_newBeneficiary",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
