cd ~/fabric-dev-servers
./stopFabric.sh
echo "======================================================="
echo "                 Fabric is stopped"
echo "======================================================="
./teardownFabric.sh
echo "======================================================="
echo "             Fabric Tear Down Successful"
echo "======================================================="
export FABRIC_VERSION=hlfv12
echo "======================================================="
echo "          exported FABRIC_VERSION to hlfv12"
echo "======================================================="
./downloadFabric.sh
echo "======================================================="
echo "             Download fabric is completed"
echo "======================================================="
./startFabric.sh
echo "======================================================="
echo "Fabric is started and also upgrade should be possible 98.25%"
echo "Now run makeBusinessNetworkArchive.sh "
echo ""
echo "======================Thankyou========================="
