<?php

namespace App\Repository;

use App\Entity\AdvertisingPlaces;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<AdvertisingPlaces>
 *
 * @method AdvertisingPlaces|null find($id, $lockMode = null, $lockVersion = null)
 * @method AdvertisingPlaces|null findOneBy(array $criteria, array $orderBy = null)
 * @method AdvertisingPlaces[]    findAll()
 * @method AdvertisingPlaces[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AdvertisingPlacesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AdvertisingPlaces::class);
    }

    public function save(AdvertisingPlaces $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(AdvertisingPlaces $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return AdvertisingPlaces[] Returns an array of AdvertisingPlaces objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('e.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?AdvertisingPlaces
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
