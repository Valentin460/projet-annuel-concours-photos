<?php

namespace App\Repository;

use App\Entity\ContestsOrganizations;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ContestsOrganizations>
 *
 * @method ContestsOrganizations|null find($id, $lockMode = null, $lockVersion = null)
 * @method ContestsOrganizations|null findOneBy(array $criteria, array $orderBy = null)
 * @method ContestsOrganizations[]    findAll()
 * @method ContestsOrganizations[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ContestsOrganizationsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ContestsOrganizations::class);
    }

    public function save(ContestsOrganizations $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ContestsOrganizations $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ContestsOrganizations[] Returns an array of ContestsOrganizations objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ContestsOrganizations
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
