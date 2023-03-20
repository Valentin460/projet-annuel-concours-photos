<?php

namespace App\Repository;

use App\Entity\EspacePublicitaire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<EspacePublicitaire>
 *
 * @method EspacePublicitaire|null find($id, $lockMode = null, $lockVersion = null)
 * @method EspacePublicitaire|null findOneBy(array $criteria, array $orderBy = null)
 * @method EspacePublicitaire[]    findAll()
 * @method EspacePublicitaire[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EspacePublicitaireRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EspacePublicitaire::class);
    }

    public function save(EspacePublicitaire $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(EspacePublicitaire $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return EspacePublicitaire[] Returns an array of EspacePublicitaire objects
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

//    public function findOneBySomeField($value): ?EspacePublicitaire
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
