
const BEP20 = artifacts.require("BEP20");
const day = 24 * 60 * 60;
const { BN, time } = require('@openzeppelin/test-helpers');

contract('BEP20', (accounts) => {

  beforeEach(async function() {
    const bep = await BEP20.deployed();
    //await time.increaseTo(1616581471);
  });
  it('Test1 : The Balalance of the owner should be 0', async () => {
    const bep = await BEP20.deployed();
    const balance = await bep.balanceOf(accounts[0]);

    assert.equal(balance.valueOf(),  0, "The Ballance should be  0");
  });


  it('Test3 : try to mint on  14 fev  2022  : 14 février 2022 00:00:00 GMT+01:00', async () => {
    const bep = await BEP20.deployed();
    await time.increaseTo(1644793200);
    await bep.mint(1);
    const balanceAss  = await bep.balanceOf(accounts[1]);
    const balanceTeam = await bep.balanceOf(accounts[2]);
    const balanceSeed = await bep.balanceOf(accounts[3]);
    const balancePriv  = await bep.balanceOf(accounts[4]);
    const balanceMark = await bep.balanceOf(accounts[5]);
    const balanceICOR1 = await bep.balanceOf(accounts[6]);
    const balanceICOR2 = await bep.balanceOf(accounts[7]);
    const balanceICOR3 = await bep.balanceOf(accounts[8]);
    const balanceReserve = await bep.balanceOf(accounts[9]);
    assert.equal(balanceReserve.valueOf(), 0, "The Ballance should be  0");
    assert.equal(balanceICOR3.valueOf(), 0, "The Ballance should be  0");
    assert.equal(balanceICOR2.valueOf(), 0, "The Ballance should be  0");
    assert.equal(balanceICOR1.valueOf(), 0, "The Ballance should be  0");
    assert.equal(balanceAss.valueOf(),   0, "The Ballance should be  0");
    assert.equal(balanceTeam.valueOf(),  0, "The Ballance should be  0");
    assert.equal(balanceSeed.valueOf(),  0, "The Ballance should be  0");
    assert.equal(balancePriv.valueOf(),   0, "The Ballance should be  0");
    assert.equal(balanceMark.valueOf(),  0, "The Ballance should be  0");

  });

  it('Test4 : try to mint on  15 fev  2022  : 15 février 2022 00:00:01 GMT+01:00', async () => {
    const bep = await BEP20.deployed();
    await time.increaseTo(1644879601);
    await bep.mint(1);
    const balanceAss  = await bep.balanceOf(accounts[1]);
    const balanceTeam = await bep.balanceOf(accounts[2]);
    const balanceSeed = await bep.balanceOf(accounts[3]);
    const balancePriv  = await bep.balanceOf(accounts[4]);
    const balanceMark = await bep.balanceOf(accounts[5]);
    const balanceICOR1 = await bep.balanceOf(accounts[6]);
    const balanceICOR2 = await bep.balanceOf(accounts[7]);
    const balanceICOR3 = await bep.balanceOf(accounts[8]);
    const balanceReserve = await bep.balanceOf(accounts[9]);
    assert.equal(balanceReserve.valueOf(), 79200000000000000, "The Ballance should be  79200000000000000");
    assert.equal(balanceICOR3.valueOf(),   450000000000000000, "The Ballance should be  450000000000000000");
    assert.equal(balanceICOR2.valueOf(), 60000000000000000, "The Ballance should be  60000000000000000");
    assert.equal(balanceICOR1.valueOf(), 22500000000000000, "The Ballance should be  1998000000000000");
    assert.equal(balancePriv.valueOf(),  1998000000000000, "The Ballance should be  1998000000000000");
    assert.equal(balanceMark.valueOf(),  7200000000000000, "The Ballance should be  7200000000000000");
    assert.equal(balanceAss.valueOf(),   8046000000000000, "The Ballance should be  8046000000000000");
    assert.equal(balanceTeam.valueOf(),  6300000000000000, "The Ballance should be  6300000000000000");
    assert.equal(balanceSeed.valueOf(),  6255000000000000, "The Ballance should be  6255000000000000");

    console.log("Balance of Reserve at the End of ICO            : " +balanceReserve.valueOf());
    console.log("Balance of Associates at the End of ICO         : " +balanceAss.valueOf());
    console.log("Balance of Teams &  advisors at the End of ICO  : "  +balanceTeam.valueOf());
    console.log("Balance of Seed supporters at the End of ICO    : " +balanceSeed.valueOf());
    console.log("Balance of Private sale at the End of ICO       : " +balancePriv.valueOf());
    console.log("Balance of Marketing, airdrop at the End of ICO : " +balanceMark.valueOf());
    console.log("Balance of ICO R1 at the End of ICO             : " +balanceICOR1.valueOf());
    console.log("Balance of ICO R2 at the End of ICO             : " +balanceICOR2.valueOf());
    console.log("Balance of ICO R3 at the End of ICO             : " +balanceICOR3.valueOf());
  });
 /*
  * minting tests for accounts that have a cliff of 6 months
  */

  it('Test5 : try to mint for  Assocites, Team and Seed before 6 M lockup at 15 mars 2022 00:00:01 GMT+01:00', async () => {
    const bep = await BEP20.deployed();
    await time.increaseTo(1647298801);
    await bep.mint(6);
    const balanceAss  = await bep.balanceOf(accounts[1]);
    const balanceTeam = await bep.balanceOf(accounts[2]);
    const balanceSeed = await bep.balanceOf(accounts[3]);
    const balancePriv  = await bep.balanceOf(accounts[4]);
    const balanceMark = await bep.balanceOf(accounts[5]);
    const balanceICOR1 = await bep.balanceOf(accounts[6]);
    const balanceICOR2 = await bep.balanceOf(accounts[7]);
    const balanceICOR3 = await bep.balanceOf(accounts[8]);
    const balanceReserve = await bep.balanceOf(accounts[9]);
    assert.equal(balanceReserve.valueOf(), 79200000000000000, "The Ballance should be  79200000000000000");
    assert.equal(balanceICOR3.valueOf(),   450000000000000000, "The Ballance should be  450000000000000000");
    assert.equal(balanceICOR2.valueOf(), 60000000000000000, "The Ballance should be  60000000000000000");
    assert.equal(balanceICOR1.valueOf(), 22500000000000000, "The Ballance should be  1998000000000000");
    assert.equal(balancePriv.valueOf(),  1998000000000000, "The Ballance should be  1998000000000000");
    assert.equal(balanceMark.valueOf(),  7200000000000000, "The Ballance should be  7200000000000000");
    assert.equal(balanceAss.valueOf(),   8046000000000000, "The Ballance should be  8046000000000000");
    assert.equal(balanceTeam.valueOf(),  6300000000000000, "The Ballance should be  6300000000000000");
    assert.equal(balanceSeed.valueOf(),  6255000000000000, "The Ballance should be  6255000000000000");

  });

  it('Test6 : try to mint for  Assocites, Team and Seed after 6 M lockup at 15 août 2022 00:00:01 GMT+02:00', async () => {
    const bep = await BEP20.deployed();
    await time.increaseTo(1660514401);
    await bep.mint(6);
    const balanceAss  = await bep.balanceOf(accounts[1]);
    const balanceTeam = await bep.balanceOf(accounts[2]);
    const balanceSeed = await bep.balanceOf(accounts[3]);
    const balancePriv  = await bep.balanceOf(accounts[4]);
    const balanceMark = await bep.balanceOf(accounts[5]);
    const balanceICOR1 = await bep.balanceOf(accounts[6]);
    const balanceICOR2 = await bep.balanceOf(accounts[7]);
    const balanceICOR3 = await bep.balanceOf(accounts[8]);
    const balanceReserve = await bep.balanceOf(accounts[9]);
    assert.equal(balanceReserve.valueOf(), (79200000000000000 + 17600000000000000), "The Ballance should be  79200000000000000 + 17600000000000000");
    assert.equal(balanceAss.valueOf(),     (8046000000000000 + 8493000000000000), "The Ballance should be  8046000000000000 + 8493000000000000");
    assert.equal(balanceTeam.valueOf(),    (6300000000000000 + 6650000000000000), "The Ballance should be  6300000000000000 + 6650000000000000");
    assert.equal(balanceSeed.valueOf(),    (6255000000000000 + 6602500000000000), "The Ballance should be  6255000000000000 + 6602500000000000");
    assert.equal(balanceICOR3.valueOf(),   450000000000000000, "The Ballance should be  450000000000000000");
    assert.equal(balanceICOR2.valueOf(), 60000000000000000, "The Ballance should be  60000000000000000");
    assert.equal(balanceICOR1.valueOf(), 22500000000000000, "The Ballance should be  1998000000000000");
    assert.equal(balancePriv.valueOf(),  1998000000000000, "The Ballance should be  1998000000000000");
    assert.equal(balanceMark.valueOf(),  7200000000000000, "The Ballance should be  7200000000000000");
  });

  it('Test7 : try to mint for  Assocites, Team and Seed after 2 days  after  6 M lockup at 17 août 2022 00:00:01 GMT+02:00', async () => {
    const bep = await BEP20.deployed();
    await time.increaseTo(1660687201);
    await bep.mint(6);
    const balanceAss  = await bep.balanceOf(accounts[1]);
    const balanceTeam = await bep.balanceOf(accounts[2]);
    const balanceSeed = await bep.balanceOf(accounts[3]);
    const balancePriv  = await bep.balanceOf(accounts[4]);
    const balanceMark = await bep.balanceOf(accounts[5]);
    const balanceICOR1 = await bep.balanceOf(accounts[6]);
    const balanceICOR2 = await bep.balanceOf(accounts[7]);
    const balanceICOR3 = await bep.balanceOf(accounts[8]);
    const balanceReserve = await bep.balanceOf(accounts[9]);
    assert.equal(balanceReserve.valueOf(), (79200000000000000 + 17600000000000000), "The Ballance should be  79200000000000000 + 17600000000000000");                                          //_associatesEndOfIcoSupply + _associatesMonthlySupply
    assert.equal(balanceAss.valueOf(),   (8046000000000000 + 8493000000000000), "The Ballance should be  8046000000000000 + 8493000000000000");
    assert.equal(balanceTeam.valueOf(),  (6300000000000000 + 6650000000000000), "The Ballance should be  6300000000000000 + 6650000000000000");
    assert.equal(balanceSeed.valueOf(),  (6255000000000000 + 6602500000000000), "The Ballance should be  6255000000000000 + 6602500000000000");
    assert.equal(balanceICOR3.valueOf(),   450000000000000000, "The Ballance should be  450000000000000000");
    assert.equal(balanceICOR2.valueOf(), 60000000000000000, "The Ballance should be  60000000000000000");
    assert.equal(balanceICOR1.valueOf(), 22500000000000000, "The Ballance should be  1998000000000000");
    assert.equal(balancePriv.valueOf(),  1998000000000000, "The Ballance should be  1998000000000000");
    assert.equal(balanceMark.valueOf(),  7200000000000000, "The Ballance should be  7200000000000000");
  });

  it('Test8 : try to mint for  Assocites, Team and Seed after 30 days  after  6 M lockup at 15 septembre 2022 00:00:01 GMT+02:00', async () => {
    const bep = await BEP20.deployed();
    await time.increaseTo(1663192801);
    await bep.mint(6);
    const balanceAss  = await bep.balanceOf(accounts[1]);
    const balanceTeam = await bep.balanceOf(accounts[2]);
    const balanceSeed = await bep.balanceOf(accounts[3]);
    const balancePriv  = await bep.balanceOf(accounts[4]);
    const balanceMark = await bep.balanceOf(accounts[5]);
    const balanceICOR1 = await bep.balanceOf(accounts[6]);
    const balanceICOR2 = await bep.balanceOf(accounts[7]);
    const balanceICOR3 = await bep.balanceOf(accounts[8]);
    const balanceReserve = await bep.balanceOf(accounts[9]);
    assert.equal(balanceReserve.valueOf(), (79200000000000000 + 2*17600000000000000), "The Ballance should be  79200000000000000 + 2*17600000000000000");                                          //_associatesEndOfIcoSupply + _associatesMonthlySupply
    assert.equal(balanceAss.valueOf(),   (8046000000000000 + 2*8493000000000000), "The Ballance should be  8046000000000000 + 2*8493000000000000");
    assert.equal(balanceTeam.valueOf(),  (6300000000000000 + 2*6650000000000000), "The Ballance should be  6300000000000000 + 2*6650000000000000");
    assert.equal(balanceSeed.valueOf(),  (6255000000000000 + 2*6602500000000000), "The Ballance should be  6255000000000000 + 2*6602500000000000");
    assert.equal(balanceICOR3.valueOf(),   450000000000000000, "The Ballance should be  450000000000000000");
    assert.equal(balanceICOR2.valueOf(), 60000000000000000, "The Ballance should be  60000000000000000");
    assert.equal(balanceICOR1.valueOf(), 22500000000000000, "The Ballance should be  1998000000000000");
    assert.equal(balancePriv.valueOf(),  1998000000000000, "The Ballance should be  1998000000000000");
    assert.equal(balanceMark.valueOf(),  7200000000000000, "The Ballance should be  7200000000000000");
  });

  it('Test9 : try to mint for  Assocites, Team and Seed every 30 days  after  6 M lockup starting from  15 octobre 2022 00:00:01 GMT+02:00 ( 16 mint)', async () => {
    const bep = await BEP20.deployed();
    for (let step = 0; step < 16; step++) {
      await time.increaseTo(1665784801  + step*2674800);
      await bep.mint(6);
      const balanceAss  = await bep.balanceOf(accounts[1]);
      const balanceTeam = await bep.balanceOf(accounts[2]);
      const balanceSeed = await bep.balanceOf(accounts[3]);
      const balancePriv  = await bep.balanceOf(accounts[4]);
      const balanceMark = await bep.balanceOf(accounts[5]);
      const balanceICOR1 = await bep.balanceOf(accounts[6]);
      const balanceICOR2 = await bep.balanceOf(accounts[7]);
      const balanceICOR3 = await bep.balanceOf(accounts[8]);
      const balanceReserve = await bep.balanceOf(accounts[9]);
      assert.equal(balanceReserve.valueOf(), (79200000000000000 + (3+step)*17600000000000000), "The Ballance should be  79200000000000000 + (3+step)*17600000000000000");                                            //_associatesEndOfIcoSupply + _associatesMonthlySupply
      assert.equal(balanceAss.valueOf(),   (8046000000000000 + (3+step)*8493000000000000), "The Ballance should be  8046000000000000 + (3+step)*8493000000000000");
      assert.equal(balanceTeam.valueOf(),  (6300000000000000 + (3+step)*6650000000000000), "The Ballance should be  6300000000000000 + (3+step)*6650000000000000");
      assert.equal(balanceSeed.valueOf(),  (6255000000000000 + (3+step)*6602500000000000), "The Ballance should be  6255000000000000 + (3+step)*6602500000000000");
      assert.equal(balanceICOR3.valueOf(),   450000000000000000, "The Ballance should be  450000000000000000");
      assert.equal(balanceICOR2.valueOf(), 60000000000000000, "The Ballance should be  60000000000000000");
      assert.equal(balanceICOR1.valueOf(), 22500000000000000, "The Ballance should be  1998000000000000");
      assert.equal(balancePriv.valueOf(),  1998000000000000, "The Ballance should be  1998000000000000");
      assert.equal(balanceMark.valueOf(),  7200000000000000, "The Ballance should be  7200000000000000");
      const totals = balanceAss + "  "+ balanceTeam +  " "+ balanceSeed + " " +balanceReserve;
      console.log("totals - "+ step  +" : "+totals);

    }
  });

  it('Test10 : try to mint for  Assocites, Team and Seed  after 24 M (6 M + 18 M) at 15 février 2024 00:00:01 GMT+01:00', async () => {
    const bep = await BEP20.deployed();
    await time.increaseTo(1707951601);
    await bep.mint(6);
    const balanceAss  = await bep.balanceOf(accounts[1]);
    const balanceTeam = await bep.balanceOf(accounts[2]);
    const balanceSeed = await bep.balanceOf(accounts[3]);
    const balancePriv  = await bep.balanceOf(accounts[4]);
    const balanceMark = await bep.balanceOf(accounts[5]);
    const balanceICOR1 = await bep.balanceOf(accounts[6]);
    const balanceICOR2 = await bep.balanceOf(accounts[7]);
    const balanceICOR3 = await bep.balanceOf(accounts[8]);
    const balanceReserve = await bep.balanceOf(accounts[9]);
                                          //_associatesEndOfIcoSupply + _associatesMonthlySupply
    assert.equal(balanceReserve.valueOf(), (79200000000000000 + 18*17600000000000000), "The Ballance should be  79200000000000000 + 18*17600000000000000");                                            //_associatesEndOfIcoSupply + _associatesMonthlySupply
    assert.equal(balanceAss.valueOf(),   (8046000000000000 + 18*8493000000000000), "The Ballance should be  8046000000000000 + 18*8493000000000000");
    assert.equal(balanceTeam.valueOf(),  (6300000000000000 + 18*6650000000000000), "The Ballance should be  6300000000000000 + 18*6650000000000000");
    assert.equal(balanceSeed.valueOf(),  (6255000000000000 + 18*6602500000000000), "The Ballance should be  6255000000000000 + 18*6602500000000000");
    assert.equal(balanceICOR3.valueOf(),   450000000000000000, "The Ballance should be  450000000000000000");
    assert.equal(balanceICOR2.valueOf(), 60000000000000000, "The Ballance should be  60000000000000000");
    assert.equal(balanceICOR1.valueOf(), 22500000000000000, "The Ballance should be  1998000000000000");
    assert.equal(balancePriv.valueOf(),  1998000000000000, "The Ballance should be  1998000000000000");
    assert.equal(balanceMark.valueOf(),  7200000000000000, "The Ballance should be  7200000000000000");
  });
  });