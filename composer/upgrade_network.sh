composer archive create --sourceType dir --sourceName . -a waste_v3@0.0.14.bna

echo "=================================================================================="
echo "                             New Archive File Created"
echo "=================================================================================="

composer network install --card PeerAdmin@hlfv1 --archiveFile waste_v3@0.0.14.bna

echo "=================================================================================="
echo "                             Network card install"
echo "=================================================================================="

composer network upgrade -c PeerAdmin@hlfv1 -n waste_v3 -V 0.0.14

echo "=================================================================================="
echo "                             Network card Updated"
echo "=================================================================================="

composer network ping -c admin@waste_v3 | grep Business

echo "=================================================================================="
echo "                                   Completed"
echo "=================================================================================="